import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Features from './components/Features';
import { Content } from './components/Contents';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Features />
        <Content />
        <Gallery />
        <Partners/>
        <Testimonials/>
        <CTA/>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
