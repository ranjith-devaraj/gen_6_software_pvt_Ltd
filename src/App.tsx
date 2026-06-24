import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;