import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import Home from "./pages/Home";
import { ScrollToTop } from "./components/ScrollToTop";
import Services from "./pages/Services";
import About from "./pages/About";
import SingleStoreyHomes from "./pages/SingleStoreyPage";
import DoubleStoreyHomes from "./pages/DoubleStoreyPage";
import HomeDesigns from "./pages/HomeDesigns";
import ApprovalsPage from "./pages/ApprovalsPage";
import WhyChoosePage from "./pages/WhyChoosePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/single-storey-homes" element={<SingleStoreyHomes />} />
    <Route path="/double-storey-homes" element={<DoubleStoreyHomes />} />
     <Route path="/home-designs" element={<HomeDesigns />} />
        <Route path="/building-approvals" element={<ApprovalsPage />} />
    <Route path="/why-choose-us" element={<WhyChoosePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;