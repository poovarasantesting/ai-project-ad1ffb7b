import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}