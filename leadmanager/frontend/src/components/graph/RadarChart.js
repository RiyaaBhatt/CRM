// src/components/RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, RadarController, PointElement, LineElement, RadialLinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, RadarController, PointElement, LineElement, RadialLinearScale);

const RadarChart = () => {
  const data = {
    labels: ['Running', 'Swimming', 'Cycling', 'Hiking', 'Reading'],
    datasets: [
      {
        label: 'Activities',
        data: [4, 3, 2, 5, 1],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
