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
        <div className="border rounded-lg mt-6 p-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Add more details about your event and include what people can expect if they attend.
          </p>
          <div className="border rounded-lg dark:border-gray-600 overflow-hidden mt-4">
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
          <button className="flex items-center text-gray-400 text-sm mt-2" disabled>
            ⚡ Suggest description
          </button>
          <div className="flex gap-4 mt-4">
            <button className="border p-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <List size={18} /> Add text
            </button>
            <button className="border p-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              📷 Add image
            </button>
            <button className="border p-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              🎥 Add video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
