import { useState, useEffect } from 'react'

type Data = {
  id: number;
  name: string;
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

export default function useRedis() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData)
    }, 1000 * 10);
  }, []);

  return data;
}
