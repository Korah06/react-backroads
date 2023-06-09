import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import './index.css';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
