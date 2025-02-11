
import { useState } from "react";
import BG from "../assets/cret.jpg";
import { Calendar, Clock, MapPin, Bold, Italic, Link, List, Trash, Text, ChevronDown, ChevronUp } from "lucide-react";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [eventType, setEventType] = useState("single");
  const [locationType, setLocationType] = useState("venue");
  const [description, setDescription] = useState("");

  // Accordion State
  const [openSections, setOpenSections] = useState({
    overview: true,
    date: false,
    details: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-6">
      {/* Hero Image */}
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              Upload photos and videos
            </button>
          </div>
          <img src={BG} alt="Event" className="w-full h-64 object-cover opacity-30" />
        </div>

        {/* Event Overview Accordion */}
        <div className="border rounded-lg mt-6">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold"
            onClick={() => toggleSection("overview")}
          >
            Event Overview
            {openSections.overview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openSections.overview && (
            <div className="p-6">
              {/* Event Title */}
              <div className="mb-4">
                <label className="block text-lg font-semibold">Event Title</label>
                <p className="block text-sm font-semibold">
                  Be clear and descriptive with a title that tells people what your event is about.
                </p>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
                  placeholder="Event title *"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Summary */}
              <div className="mb-4">
                <label className="block text-lg font-semibold">Summary</label>
                <p className="block text-sm font-semibold">Grab people's attention with a short description about your event. Attendees will see this at the top of your event page. (140 characters max)</p>
                <textarea
                  className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
                  placeholder="Summary *"
                  maxLength={140}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                ></textarea>
                <p className="text-right text-sm text-gray-500 dark:text-gray-400">{summary.length} / 140</p>
              </div>
            </div>
          )}
        </div>

        {/* Date & Location Accordion */}
        <div className="border rounded-lg mt-6">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold"
            onClick={() => toggleSection("date")}
          >
            Date and Location
            {openSections.date ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openSections.date && (
            <div className="p-6 space-y-6">
              {/* Step 1: Select Event Type */}
              <div>
                <h3 className="font-medium">1. Select Event Type</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["single", "recurring"].map((type) => (
                    <button
                      key={type}
                      className={`flex items-center gap-2 p-3 border rounded-lg transition w-full sm:w-1/2 md:w-1/3 ${eventType === type ? "border-blue-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                      onClick={() => setEventType(type)}
                    >
                      <Calendar className="w-5 h-5" />
                      <span>{type === "single" ? "Single event" : "Recurring event"}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Set Date and Time Section */}
              <div>
                <h3 className="font-medium">2. Set Date and Time</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {/* Event Date */}
                  <div className="w-full">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Event Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
                      />
                      <Calendar className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    </div>
                  </div>

                  {/* Start Time */}
                  <div className="w-full">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Start Time</label>
                    <div className="relative">
                      <input
                        type="time"
                        step="900" // Sets 15-minute interval steps
                        className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
                      />
                      <Clock className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    </div>
                  </div>

                  {/* End Time */}
                  <div className="w-full">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">End Time</label>
                    <div className="relative">
                      <input
                        type="time"
                        step="900"
                        className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
                      />
                      <Clock className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>


              {/* Step 3: Set Location */}
              <div>
                <h3 className="font-medium">3. Set Event Location</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["venue", "online", "tba"].map((type) => (
                    <button
                      key={type}
                      className={`p-2 border rounded-lg transition w-full sm:w-1/3 ${locationType === type ? "bg-blue-500 text-white" : "border-gray-300 dark:border-gray-600"
                        }`}
                      onClick={() => setLocationType(type)}
                    >
                      {type === "venue" ? "Venue" : type === "online" ? "Online event" : "TBA"}
                    </button>
                  ))}
                </div>
                <div className="relative mt-3">
                  <input
                    type="text"
                    placeholder="Enter Location *"
                    className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
                  />
                  <MapPin className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
                </div>
              </div>
            </div>
          )}
        </div>



        {/* Overview / Description Accordion */}
        <div className="border rounded-lg mt-6">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold"
            onClick={() => toggleSection("details")}
          >
            Event Details
            {openSections.details ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openSections.details && (
            <div className="p-6">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Add more details about your event and include what people can expect.
              </p>

              {/* Text Editor */}
              <div className="border rounded-lg dark:border-gray-600 overflow-hidden">
                <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-2 border-b dark:border-gray-600">
                  {[Text, Bold, Italic, Link, List].map((Icon, index) => (
                    <button key={index} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full h-40 p-4 text-gray-800 dark:text-white dark:bg-gray-900 focus:outline-none"
                  placeholder="Write something about your event..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Delete Button */}
              <button
                className="mt-3 flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                onClick={() => setDescription("")}
              >
                <Trash size={18} />
                Clear Text
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CreateEvent;
