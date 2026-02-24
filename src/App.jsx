// import { useState } from 'react'
// import './App.css'
// import Footer from './Components/Nav/Footer.jsx';
import Nav from './Components/Nav/Nav.jsx';
// import AboutPreview from './Components/home/AboutPreview.jsx';
// import Offer from './Components/home/Offer.jsx';
// import HeroSection from './Components/home/HeroSection.jsx';
// import Session from './Components/home/Session.jsx';
// import President from './Components/home/President.jsx';
// import Testimonial from './Components/home/Testimonial.jsx';
// import CTASection from './Components/home/CTASection.jsx';
import Index from './Pages/index.jsx';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Session from './Pages/Session.jsx';
import FAQ from './Pages/FAQ.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
  )
}

export default App
