import React from 'react';
import { Bar } from 'react-chartjs-2';
import { barData, barOptions } from './chartBarConfig';

const ChartBar = () => {
  return <Bar id="bar-chart" data={barData} options={barOptions} />;
};

export default ChartBar;
