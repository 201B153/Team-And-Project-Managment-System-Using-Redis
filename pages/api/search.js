import { searchTeams } from '../../components/redis';

export default async function handler(req, res) {
  const q = req.query.q;
  const cars = await searchTeams(q);
  res.status(200).json({ teams });
}
