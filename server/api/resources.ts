import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function getResources(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'public/static/data/resources.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const resources = JSON.parse(fileContents);
    res.status(200).json(resources);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}