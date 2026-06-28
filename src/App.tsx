import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/team" element={<Team />} />

        <Route path="/contact" element={<Contact />} />

       <Route
  path="/services/:id"
  element={<ServiceDetails />}
/>
<Route path="/contact" element={<Contact />} />

        <Route path="/careers" element={<Careers />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;