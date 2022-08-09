import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '14th',
    pv: 1,
  },
  {
    name: '15th',
    pv: 4,
  },
  {
    name: '16th',
    pv: 11,
  },
  {
    name: '17th',
    pv: 9,
  },
  {
    name: '18th',
    pv: 9,
  },
  {
    name: '19th',
    pv: 14,
  },
  {
    name: '20th',
    pv: 4,
  },
];

export const Charts = () => {
  return (
    <ResponsiveContainer width="99%" aspect={2} height={500}>
      <BarChart data={data} barSize={10}>
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis type="number" tickCount={5} domain={[0, 20]} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Bar dataKey="pv" fill="#7871FF" radius={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};
