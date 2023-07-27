'use client';

import useRedis from '~/hooks/useRedis';

export default function Home() {
  const data = useRedis();

  return (
    <main>
      <h1>Hi Abby!</h1>
      <ul>
        { 
          Object.entries(data).map(
            ([id, msg]) => <li key={id}>{msg}</li>) 
          ?? <li>loading...</li>
        }
      </ul>
    </main>
  )
}
