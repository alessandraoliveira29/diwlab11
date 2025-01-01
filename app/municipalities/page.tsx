'use client';

import React from 'react';
import useSWR from 'swr';
import { Municipality } from '@/app/models/interfaces';
import { MunicipalityCard } from './components/MunicipalityCard';

export default function Municipalities() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: municipalities, error, isLoading } = useSWR<Municipality[], Error>('/api/municipalities', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!municipalities || municipalities.length === 0) return <div>No data available</div>;

  return (
    <>
      {municipalities.map((municipality: Municipality) => (
        <MunicipalityCard
          key={municipality.id}
          id={municipality.id}
          name={municipality.name}
          district_name={municipality.district_name}
        />
      ))}
    </>
  );
}
