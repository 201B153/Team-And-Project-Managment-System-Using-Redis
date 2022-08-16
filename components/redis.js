import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Team extends Entity {}
let schema = new Schema(
  Team,
  {
    Project_Number: { type: 'string' },
    Project_Name: { type: 'string' },
    Project_ScreenShot: { type: 'string' },
    Project_Description: { type: 'string', textSearch: true },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function createTeam(data) {
  await connect();

  const repository = new Repository(schema, client);

  const team = repository.createEntity(data);

  const id = await repository.save(team);
  return id;
}

export async function getTeam(id) {
  await connect();

  const repository = new Repository(schema, client);
  return repository.fetch(id);
}

export async function createIndex() {
  await connect();

  const repository = new Repository(schema, client);
  await repository.createIndex();
}

export async function searchTeams(q) {
  await connect();

  const repository = new Repository(schema, client);

  const teams = await repository
    .search()
    .where('Project_Number')
    .eq(q)
    .or('Project_Name')
    .eq(q)
    .or('Project_Description')
    .matches(q)
    .return.all();

  return teams;
}
