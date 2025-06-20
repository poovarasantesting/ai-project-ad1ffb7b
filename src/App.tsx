import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import RegisterPage from "@/pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;