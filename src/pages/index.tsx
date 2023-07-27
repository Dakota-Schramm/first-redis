import useRedis from '~/hooks/useRedis';

export default function Home() {
  const data = useRedis();

  return (
    <main>
      <h1>Hi Abby!</h1>
      <ul>
        { 
          data.map(d => <li key={d.id}>{d.name}</li>) 
          ?? <li>loading...</li>
        }
      </ul>
    </main>
  )
}
