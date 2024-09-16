// src/components/BubbleChart.js
import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BubbleController, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BubbleController, PointElement, CategoryScale, LinearScale);

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 20 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-axis',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y-axis',
        },
      },
    },
  };

  return <Bubble data={data} options={options} />;
};

export default BubbleChart;
