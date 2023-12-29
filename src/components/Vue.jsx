import React from 'react';
import { useParams } from 'react-router-dom';

export default function Vue() {
  const { vueId } = useParams();
  return <div>Vue: {vueId}</div>;
}
