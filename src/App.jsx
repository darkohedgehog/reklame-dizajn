import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
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
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="*" component={NotFound} />
      <Footer />
      <div className="particles-bg-container">
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    </Router>
  );
};

export default App;
