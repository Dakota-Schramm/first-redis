import { NextRequest, NextResponse } from 'next/server'

import { client as redis } from '~/utils/redis'

type Data = {
  id: number,
  name: string
}

const mockData: Data[] = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
  { id: 3, name: 'third' },
  { id: 4, name: 'fourth' },
  { id: 5, name: 'fifth' },
  { id: 6, name: 'sixth' },
  { id: 7, name: 'seventh' },
  { id: 8, name: 'eighth' },
  { id: 9, name: 'ninth' },
  { id: 10, name: 'tenth' }
]

export async function GET() {
  try {
    await redis.connect()

    const exists = await redis.exists('messages')
    if (exists) {
      console.log("Getting cached version...")
      const data = await redis.hGetAll('messages')

      return NextResponse.json(data)
    }

    let messagesSaved = []
    for (const [_, value] of Object.entries(mockData)) {
      const { id, name } = value;
      const exists = await redis.hExists('messages', `${id}`);
      if (exists) {
        continue;
      }

      messagesSaved.push({ value });
      await redis.hSet('messages', id, name);
    }

    setTimeout(() => {
      console.log("fetching messages...")
    }, 1000 * 3);

    return NextResponse.json(messagesSaved)
  } catch (error) {
    console.log("Error: ", error, JSON.stringify(error))
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  } finally {
    await redis.quit(); // Gracefully close a client's connection to Redis, by sending the QUIT command to the server. Before quitting, the client executes any remaining commands in its queue, and will receive replies from Redis for each of them.
  }
}

