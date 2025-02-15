import { useState, useCallback, useEffect } from "react";
import { Calendar, Clock, MapPin, Bold, Italic, Link, List, Trash, Text, Plus, Minus, Upload, X, Info } from "lucide-react";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    summary: "",
    eventType: "single",
    locationType: "venue",
    description: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    location: "",
    isVirtual: false,
    virtualLink: "",
    capacity: "",
    price: "",
    tags: [],
    organizerInfo: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [mediaFiles, setMediaFiles] = useState([]);
  const [openSections, setOpenSections] = useState({
    overview: true,
    date: false,
    details: false,
    organizer: false,
    eventDetails: false,
  });
  const [isDirty, setIsDirty] = useState(false);

  const toggleSection = useCallback((section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-6">
      <form className="max-w-4xl mx-auto space-y-6">
        {/* Event Details Section */}
        <div className="border rounded-lg">
          <button
            type="button"
            className="flex justify-between items-center w-full p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-t-lg"
            onClick={() => toggleSection("eventDetails")}
          >
            <span className="font-medium">Event Details</span>
            {openSections.eventDetails ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {openSections.eventDetails && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block font-medium">Event Description</label>
                <textarea
                  name="description"
                  value={eventData.description}
                  onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                  className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <label className="block font-medium">Additional Notes</label>
                <textarea
                  name="notes"
                  value={eventData.notes || ""}
                  onChange={(e) => setEventData({ ...eventData, notes: e.target.value })}
                  className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                  rows="4"
                ></textarea>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;










import { useState, useCallback, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Bold,
  Italic,
  Link,
  List,
  Trash,
  Text,
  Plus,
  Minus,
  Upload,
  X,
  Info,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    summary: "",
    eventType: "single",
    locationType: "venue",
    description: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    location: "",
    isVirtual: false,
    virtualLink: "",
    capacity: "",
    price: "",
    tags: [],
    organizerInfo: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [mediaFiles, setMediaFiles] = useState([]);
  const [openSections, setOpenSections] = useState({
    overview: true,
    date: false,
    details: false,
    organizer: false,
  });
  const [isDirty, setIsDirty] = useState(false);

  // Load draft from localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem("eventDraft");
    if (savedDraft) {
      try {
        setEventData(JSON.parse(savedDraft));
      } catch (e) {
        console.error("Error loading draft:", e);
      }
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    if (isDirty) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem("eventDraft", JSON.stringify(eventData));
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [eventData, isDirty]);

  const handleInputChange = useCallback((e) => {
    const { name, value, type } = e.target;
    setEventData((prev) => {
      const newData = { ...prev };
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        newData[parent] = { ...newData[parent], [child]: value };
      } else {
        newData[name] = type === "number" ? parseFloat(value) || "" : value;
      }
      return newData;
    });
    setIsDirty(true);
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  }, [errors]);

  const handleFileChange = useCallback((e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
      name: file.name
    }));
    setMediaFiles(prev => [...prev, ...newFiles]);
    setIsDirty(true);
  }, []);

  const removeFile = useCallback((index) => {
    setMediaFiles(prev => prev.filter((_, i) => i !== index));
    setIsDirty(true);
  }, []);

  const toggleSection = useCallback((section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    const requiredFields = [
      "title",
      "summary",
      "eventDate",
      "startTime",
      "endTime",
      "location",
      "organizerInfo.name",
      "organizerInfo.email"
    ];

    requiredFields.forEach(field => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        if (!eventData[parent][child]) {
          newErrors[field] = "This field is required";
        }
      } else if (!eventData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    if (eventData.isVirtual && !eventData.virtualLink) {
      newErrors.virtualLink = "Virtual meeting link is required for virtual events";
    }

    if (eventData.startTime && eventData.endTime) {
      const start = new Date(`${eventData.eventDate} ${eventData.startTime}`);
      const end = new Date(`${eventData.eventDate} ${eventData.endTime}`);
      if (end <= start) {
        newErrors.endTime = "End time must be after start time";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [eventData]);

  const saveEvent = useCallback(async () => {
    if (!validateForm()) {
      alert("Please fix the errors before saving");
      return;
    }

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem("savedEvent", JSON.stringify(eventData));
      localStorage.removeItem("eventDraft");
      setIsDirty(false);
      alert("Event saved successfully!");
    } catch (error) {
      alert("Error saving event. Please try again.");
    }
  }, [eventData, validateForm]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-6">
      <form className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Media Upload Section */}
            <div className="mb-6">
              <Label>Event Media</Label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {mediaFiles.map((file, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    {file.type === "video" ? (
                      <video src={file.url} controls className="w-full h-32 object-cover" />
                    ) : (
                      <img src={file.url} alt={file.name} className="w-full h-32 object-cover" />
                    )}
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                {mediaFiles.length < 6 && (
                  <label className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                    <input
                      type="file"
                      id="media-upload"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={handleFileChange}
                      multiple
                    />
                    <Upload size={24} />
                    <span className="text-sm mt-2">Add Media</span>
                  </label>
                )}
              </div>
              <p className="text-sm text-gray-500">Upload up to 6 photos or videos</p>
            </div>

            {/* Event Sections */}
            {[
              {
                key: "overview",
                label: "Event Overview",
                content: (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Event Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={eventData.title}
                        onChange={handleInputChange}
                        error={errors.title}
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="summary">Summary *</Label>
                      <Textarea
                        id="summary"
                        name="summary"
                        value={eventData.summary}
                        onChange={handleInputChange}
                        error={errors.summary}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="isVirtual">Virtual Event</Label>
                      <Switch
                        id="isVirtual"
                        checked={eventData.isVirtual}
                        onCheckedChange={(checked) => {
                          setEventData(prev => ({ ...prev, isVirtual: checked }));
                          setIsDirty(true);
                        }}
                      />
                    </div>
                  </div>
                ),
              },
              {
                key: "date",
                label: "Date and Time",
                content: (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="eventDate">Date *</Label>
                        <Input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={eventData.eventDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          error={errors.eventDate}
                        />
                      </div>
                      <div>
                        <Label htmlFor="startTime">Start Time *</Label>
                        <Input
                          type="time"
                          id="startTime"
                          name="startTime"
                          value={eventData.startTime}
                          onChange={handleInputChange}
                          error={errors.startTime}
                        />
                      </div>
                      <div>
                        <Label htmlFor="endTime">End Time *</Label>
                        <Input
                          type="time"
                          id="endTime"
                          name="endTime"
                          value={eventData.endTime}
                          onChange={handleInputChange}
                          error={errors.endTime}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={eventData.location}
                        onChange={handleInputChange}
                        error={errors.location}
                        placeholder={eventData.isVirtual ? "Virtual meeting link" : "Physical location"}
                      />
                    </div>
                  </div>
                ),
              },
              {
                key: "details",
                label: "Event Details",
                content: (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={eventData.description}
                        onChange={handleInputChange}
                        rows={6}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input
                          type="number"
                          id="capacity"
                          name="capacity"
                          value={eventData.capacity}
                          onChange={handleInputChange}
                          min="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          type="number"
                          id="price"
                          name="price"
                          value={eventData.price}
                          onChange={handleInputChange}
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: "organizer",
                label: "Organizer Information",
                content: (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="organizerInfo.name">Organizer Name *</Label>
                      <Input
                        id="organizerInfo.name"
                        name="organizerInfo.name"
                        value={eventData.organizerInfo.name}
                        onChange={handleInputChange}
                        error={errors["organizerInfo.name"]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="organizerInfo.email">Organizer Email *</Label>
                      <Input
                        type="email"
                        id="organizerInfo.email"
                        name="organizerInfo.email"
                        value={eventData.organizerInfo.email}
                        onChange={handleInputChange}
                        error={errors["organizerInfo.email"]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="organizerInfo.phone">Organizer Phone</Label>
                      <Input
                        type="tel"
                        id="organizerInfo.phone"
                        name="organizerInfo.phone"
                        value={eventData.organizerInfo.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ),
              },
            ].map(({ key, label, content }) => (
              <div key={key} className="border rounded-lg">
                <button
                  type="button"
                  className="flex justify-between items-center w-full p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-t-lg"
                  onClick={() => toggleSection(key)}
                >
                  <span className="font-medium">{label}</span>
                  {openSections[key] ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openSections[key] && (
                  <div className="p-6">
                    {content}
                  </div>
                )}
              </div>
            ))}

            {/* Save Button */}
            <div className="mt-6">
              {isDirty && (
                <Alert className="mb-4">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    You have unsaved changes. Don't forget to save your event.
                  </AlertDescription>
                </Alert>
              )}
              <button
                type="button"
                onClick={saveEvent}
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save Event
              </button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CreateEvent;