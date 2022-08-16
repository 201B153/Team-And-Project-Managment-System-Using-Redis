import { createTeam } from '../../components/redis';

export default async function handler(req, res) {
  const id = await createTeam(req.body);
  console.log(id);
  res.status(200).json({ id });
}
