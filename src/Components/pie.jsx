import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['TESLA', 'APPLE','NIFTY'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 5],
      backgroundColor: [
        '#FF7777',
        '#694BDB',
        '#2BEBC8',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Pie() {
  return <Doughnut data={data} />;
}