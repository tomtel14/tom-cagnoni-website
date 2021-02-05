import './App.css';
import Header from './components/header/Header';
import MusicalDirector from './components/sections/MusicalDirector';
import Composer from './components/sections/Composer';
import Instrumentalist from './components/sections/Instrumentalist';
import FunctionBand from './components/sections/FunctionBand';
import Tutor from './components/sections/Tutor';
import Contact from './components/sections/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <MusicalDirector />
      <Composer />
      <Instrumentalist />
      <FunctionBand />
      <Tutor />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
