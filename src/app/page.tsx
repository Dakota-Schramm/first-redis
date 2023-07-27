'use client';

import { useState, useEffect } from 'react';

import useRedis from '~/hooks/useRedis';

export default function Home() {
  const data = useRedis();
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
      <h1>Hi Abby!</h1>
      <ul>
        { 
          data.map(d => <li key={d.id}>{d.name}</li>) 
          ?? <li>loading...</li>
        }
      </ul>
      <p>{redisHello}</p>
    </main>
  )
}
