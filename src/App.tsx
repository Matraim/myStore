import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import Mac from './pages/Mac';
import IPad from './pages/IPad';
import IPhone from './pages/IPhone';
import Whatch from './pages/Whatch';
import AirPods from './pages/AirPods';
import Accessories from './pages/Accessories';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/IPad" element={<IPad />} />
          <Route path="/IPhone" element={<IPhone />} />
          <Route path="/Whatch" element={<Whatch />} />
          <Route path="/AirPods" element={<AirPods />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
