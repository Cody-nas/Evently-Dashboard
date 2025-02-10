import React from 'react';

const Messages = () => {
  const messages = [
    { id: 1, user: 'John Doe', message: 'Need help with booking', time: '2h ago' },
    { id: 2, user: 'Jane Smith', message: 'Event capacity question', time: '3h ago' },
    { id: 3, user: 'Mike Johnson', message: 'Refund request', time: '5h ago' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Messages</h2>
      <div className="divide-y dark:divide-gray-700">
        {messages.map(message => (
          <div key={message.id} className="py-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium dark:text-white">{message.user}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{message.time}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;