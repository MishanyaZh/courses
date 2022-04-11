import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartDescription } from './ChartBar.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
};

const labels = [
  '23 lis',
  '24 lis',
  '25 lis',
  '26 lis',
  '27 lis',
  '28 lis',
  '29 lis',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: ['100', '150', '300', '400', '500', '600', '700'],
      backgroundColor: 'rgba(0, 172, 193, 0.4)',
    },
    {
      label: 'Dataset 2',
      data: ['300', '200', '100', '700', '500', '600', '300', '400'],
      backgroundColor: '#80DEEA',
    },
  ],
};

const ChartBar = () => {
  return (
    <>
      <ChartDescription>
        <div>
          <h2>Dochód</h2>
          <div>6 599,99 zł</div>
        </div>
        <div>ten tydzień</div>
      </ChartDescription>
      <Bar options={options} data={data} />
    </>
  );
};

export default ChartBar;
