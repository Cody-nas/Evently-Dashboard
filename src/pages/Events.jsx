import React from 'react';

const Events = () => {
  const events = [
    { id: 1, name: 'Summer Music Festival', date: '2025-07-15', price: 1500 },
    { id: 2, name: 'Tech Conference 2025', date: '2025-03-20', price: 2000 },
    { id: 3, name: 'Food & Wine Expo', date: '2025-04-10', price: 1250 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Events</h2>
      <div className="divide-y dark:divide-gray-700">
        {events.map(event => (
          <div key={event.id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium dark:text-white">{event.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
            </div>
            <div className="text-right">
              <p className="font-medium dark:text-white">${event.price}</p>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;