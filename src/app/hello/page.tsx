'use client';

import { useState, useEffect } from 'react';

import useRedis from '~/hooks/useRedis';

export default function Hello() {
  const [redisHello, setReidsHello] = useState('');

  useEffect(() => {
    async function fetchRedisHello() {
      const res = await fetch('/api/hello');
      const msg = await res.json();
      setReidsHello(msg.data);
    }
    fetchRedisHello();
  }, [])

  return (
    <main>
      <h1>Hello World!</h1>
      <p>{redisHello}</p>
    </main>
  );
}
