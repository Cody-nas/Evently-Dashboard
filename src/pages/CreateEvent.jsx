
import { useState } from "react";
import BG from "../assets/cret.jpg"; <Plus />
import { Calendar, Clock, MapPin, Bold, Italic, Link, List, Trash, Text, Plus, Minus, } from "lucide-react";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [eventType, setEventType] = useState("single");
  const [locationType, setLocationType] = useState("venue");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");


  const [mediaFile, setMediaFile] = useState(null);
  const [mediaType, setMediaType] = useState(""); // Track file type

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMediaFile(URL.createObjectURL(file)); // Create preview URL
      setMediaType(file.type.startsWith("video") ? "video" : "image"); // Detect file type
    }
  };



  const saveEvent = () => {

    if (!title || !summary || !eventDate || !startTime || !endTime || !location) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    const eventData = {
      title,
      summary,
      eventType,
      locationType,
      description,
      eventDate,
      startTime,
      endTime,
      location,
    };

    localStorage.setItem("eventData", JSON.stringify(eventData));
    alert("Event saved successfully!");
  };

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
          <input
            type="file"
            id="media-upload"
            accept="image/*, video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            {/* Upload Button */}
            <label
              htmlFor="media-upload"
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
            >
              Upload photos and videos
            </label>
          </div>
          {/* Preview */}
          {mediaFile && (
            <>
              {mediaType === "video" ? (
                <video src={mediaFile} controls className="w-full h-64 object-cover" />
              ) : (
                <img src={mediaFile} alt="Preview" className="w-full h-64 object-cover" />
              )}
            </>
          )}
          <img src={BG} alt="Event background" className="w-full h-64 object-cover opacity-30" />
        </div>

        {/* Event Overview Accordion */}
        <div className="border rounded-lg mt-6">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            onClick={() => toggleSection("overview")}
            aria-expanded={openSections.overview}
            aria-controls="overview-content"
          >
            Event Overview
            {openSections.overview ? <Minus size={20} /> : <Plus size={20} />}
          </button>

          <div id="overview-content" className={openSections.overview ? "p-6" : "hidden"}>
            {/* Event Title */}
            <div className="mb-4">
              <label htmlFor="event-title" className="block text-lg font-semibold">Event Title</label>
              <p className="block text-sm text-gray-600 dark:text-gray-400">
                Be clear and descriptive with a title that tells people what your event is about.
              </p>
              <input
                id="event-title"
                type="text"
                className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                placeholder="Event title *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Summary */}
            <div className="mb-4">
              <label htmlFor="event-summary" className="block text-lg font-semibold">Summary</label>
              <p className="block text-sm text-gray-600 dark:text-gray-400">
                Grab people's attention with a short description about your event. (140 characters max)
              </p>
              <textarea
                id="event-summary"
                className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                placeholder="Summary *"
                maxLength={140}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
              />
              <p className="text-right text-sm text-gray-500 dark:text-gray-400">
                {summary.length} / 140
              </p>
            </div>
          </div>
        </div>

        {/* Date & Location Accordion */}
        <div className="border rounded-lg mt-6">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            onClick={() => toggleSection("date")}
            aria-expanded={openSections.date}
            aria-controls="date-content"
          >
            Date and Location
            {openSections.date ? <Minus size={20} /> : <Plus size={20} />}
          </button>

          <div id="date-content" className={openSections.date ? "p-6 space-y-6" : "hidden"}>
            {/* Event Type Selection */}
            <div>
              <h3 className="font-medium mb-2">1. Select Event Type</h3>
              <div className="flex flex-wrap gap-4">
                {["single", "recurring"].map((type) => (
                  <button
                    key={type}
                    className={`flex items-center gap-2 p-3 border rounded-lg transition w-full sm:w-1/2 md:w-1/3 
                      ${eventType === type ? "border-blue-500 bg-blue-50 dark:bg-blue-900" : "border-gray-300 dark:border-gray-600"}
                      hover:border-blue-300 dark:hover:border-blue-400`}
                    onClick={() => setEventType(type)}
                    aria-pressed={eventType === type}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="capitalize">{type} event</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div>
              <h3 className="font-medium mb-2">2. Set Date and Time</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Event Date */}
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Event Date *
                  </label>
                  <div className="relative">
                    <input
                      id="event-date"
                      type="date"
                      className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                    />
                    <Calendar className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                </div>

                {/* Start Time */}
                <div>
                  <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Start Time *
                  </label>
                  <div className="relative">
                    <input
                      id="start-time"
                      type="time"
                      step="900"
                      className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      required
                    />
                    <Clock className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                </div>

                {/* End Time */}
                <div>
                  <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    End Time *
                  </label>
                  <div className="relative">
                    <input
                      id="end-time"
                      type="time"
                      step="900"
                      className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      required
                    />
                    <Clock className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-medium mb-2">3. Set Event Location</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {["venue", "online", "tba"].map((type) => (
                  <button
                    key={type}
                    className={`p-2 border rounded-lg transition w-full sm:w-1/3
                      ${locationType === type ? "bg-blue-500 text-white" : "border-gray-300 dark:border-gray-600"}
                      hover:bg-blue-400 hover:text-white`}
                    onClick={() => setLocationType(type)}
                    aria-pressed={locationType === type}
                  >
                    {type === "venue" ? "Venue" : type === "online" ? "Online event" : "TBA"}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  placeholder="Enter Location *"
                  className="w-full p-3 pl-3 pr-10 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
                <MapPin className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>


        {/* Event Details Accordion */}
        <div className="border rounded-lg mt-6">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            onClick={() => toggleSection("details")}
            aria-expanded={openSections.details}
            aria-controls="details-content"
          >
            Event Details
            {openSections.details ? <Minus size={20} /> : <Plus size={20} />}
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

        {/* save button */}
        <button
          onClick={saveEvent}
          className="mt-6 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Event
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
