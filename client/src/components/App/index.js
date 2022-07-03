// == Import
import './styles.scss';

import Navbar from '../Navbar';
import Hero from '../Hero';
import ContactButtons from '../ContactButtons';
import About from '../About';
import Works from '../Works';
import Formations from '../Formations';
import Contact from '../Contact';

// == Composant
function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <main>
        <About />
      </main>
      <ContactButtons />
      <Works />
      <Formations />
      <Contact />
    </div>
  );
}

// == Export
export default App;
