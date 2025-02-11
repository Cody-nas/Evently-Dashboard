import React from 'react'
import { Calendar, MapPin, Plus, HelpCircle, Clock, Car } from 'lucide-react'

const EventPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Image Section */}
      <div className="relative h-64 bg-gray-200 dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30">
          <div className="absolute top-4 right-4">
            <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
              <Plus className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4">
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white">
              Upload photos and video
            </button>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Title Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold mb-2">Event Title</h1>
          <p className="text-gray-600 dark:text-gray-400">
            A short and sweet sentence about your event.
          </p>
        </div>

        {/* Date and Location */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Date and time</h2>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Sunday, March 23 · 10am - 12pm WAT</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Enter a location</span>
              </div>
              <button className="text-blue-600 dark:text-blue-400 mt-2">
                Hide map ↑
              </button>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Use this section to provide more details about your event. You can include things to know, venue information, accessibility options—anything that will help people know what to expect.
          </p>
        </div>

        {/* Good to Know */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Good to know</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Highlights</h3>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                <Plus className="w-4 h-4" />
                <span>Add Age info</span>
              </button>
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                <Clock className="w-4 h-4" />
                <span>Add Door Time</span>
              </button>
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                <Car className="w-4 h-4" />
                <span>Add Parking info</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Frequently asked questions</h3>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
              <HelpCircle className="w-5 h-5" />
              <span>Events with FAQs have 8% more organic traffic</span>
            </div>
            <button className="text-blue-600 dark:text-blue-400">
              + Add question
            </button>
          </div>
        </div>

        {/* Add More Sections */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add more sections to your event page</h2>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
              Recommended
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Make your event stand out even more. These sections help attendees find information and answer their questions - which means more ticket sales and less time answering messages.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Agenda</span>
              <button className="text-blue-600 dark:text-blue-400 ml-4">
                See examples
              </button>
            </div>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage