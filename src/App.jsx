import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Terms from "./pages/terms/Terms";
import ParticlesBg from 'particles-bg';



const App = () => {
  return (
    
    <BrowserRouter>    
      <Navbar />
      <Routes>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="services" element={<Services />} />
       <Route path="gallery" element={<Gallery />} />
       <Route path="contact" element={<Contact />} />
       <Route path="terms" element={<Terms />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />   
      <div className="particles-bg-container">
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    </BrowserRouter>
  )
}

export default App;