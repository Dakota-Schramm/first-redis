import { createClient } from 'redis';

export const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

client.on('connect', () => console.log('Redis Client Connected'));

/* Other commands:
  - https://redis.io/commands/
*/