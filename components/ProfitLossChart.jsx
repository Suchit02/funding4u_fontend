import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Make sure to import Chart.js components

const ProfitLossChart = ({ data }) => {
  const [filter, setFilter] = useState('week');

  // Function to filter data based on selected time period
  const filterData = () => {
    const now = new Date();
    let filteredData = [...data];

    switch (filter) {
      case 'today':
        filteredData = filteredData.filter(item => {
          const itemDate = new Date(item.time);
          return itemDate.toDateString() === now.toDateString();
        });
        break;
      case 'week':
        filteredData = filteredData.filter(item => {
          const itemDate = new Date(item.time);
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - now.getDay());
          return itemDate >= weekStart && itemDate <= now;
        });
        break;
      case 'month':
        filteredData = filteredData.filter(item => {
          const itemDate = new Date(item.time);
          return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
        });
        break;
      case 'year':
        filteredData = filteredData.filter(item => {
          const itemDate = new Date(item.time);
          return itemDate.getFullYear() === now.getFullYear();
        });
        break;
      default:
        break;
    }

    return filteredData;
  };

  const filteredData = filterData();

  const chartData = {
    labels: filteredData.map(item => new Date(item.time).toLocaleString()),
    datasets: [
      {
        label: 'Profit/Loss',
        data: filteredData.map(item => item.profit),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className='w-full h-full mt-8'>
      <div className="flex justify-end mb-4">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 border border-gray-300 rounded">
          <option value="today">Today</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default ProfitLossChart;
