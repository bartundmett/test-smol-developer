import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    getEvents(req, res);
  } else {
    res.status(405).send({ message: 'Only GET requests are allowed' });
  }
}

function getEvents(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public/static/data/events.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  try {
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ message: 'Error parsing events data' });
  }
}