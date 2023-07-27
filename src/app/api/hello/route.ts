import { NextResponse } from 'next/server';

import { client as redis } from '~/utils/redis'

export  async function GET() {
  await redis.connect()

  redis.set('foo', 'bar')

  const value = await redis.get('foo');
  console.log(value) // returns 'bar'

  await redis.quit();
  return NextResponse.json({ data: value })
}
