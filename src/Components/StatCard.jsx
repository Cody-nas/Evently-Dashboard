import React from 'react';

const StatCard = ({ title, value, icon: Icon, subtext }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
    <p className="text-sm text-gray-500 dark:text-gray-400">{subtext}</p>
  </div>
);

export default StatCard;