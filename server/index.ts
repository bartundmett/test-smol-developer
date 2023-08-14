import express from 'express';
import next from 'next';
import { getResources } from './api/resources';
import { getEvents } from './api/events';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api/resources', async (req, res) => {
    const resources = await getResources();
    res.json(resources);
  });

  server.get('/api/events', async (req, res) => {
    const events = await getEvents();
    res.json(events);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});