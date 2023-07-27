'use client'

import { useState, useEffect } from 'react'

export type Data = {
  id: number;
  name: string;
}



export default function useRedis() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchRedisData() {
      const res = await fetch('/api/view-messages');
      const data = await res.json();
      setData(data);
    }
    fetchRedisData();
  }, []);

  return data;
}
