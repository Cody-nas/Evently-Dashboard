import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Events from "./pages/Events";
import Messages from "./pages/Messages";
import CreateEvent from "./pages/CreateEvent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="events" element={<Events />} />
          <Route path="messages" element={<Messages />} />
          <Route path="create-event" element={<CreateEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
