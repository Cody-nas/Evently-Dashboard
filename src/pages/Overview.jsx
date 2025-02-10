import React from 'react';
import { FiDollarSign, FiCalendar, FiMessageSquare } from 'react-icons/fi';
import StatCard from '../Components/StatCard';

const Overview = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$15,750',
      icon: FiDollarSign,
      subtext: '+20.1% from last month'
    },
    {
      title: 'Total Events',
      value: '12',
      icon: FiCalendar,
      subtext: '+3 new this month'
    },
    {
      title: 'Messages',
      value: '48',
      icon: FiMessageSquare,
      subtext: '12 unread messages'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Overview;