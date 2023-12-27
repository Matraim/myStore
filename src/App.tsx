import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
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
import LoginForm from './layout/LoginForm';
import { useState } from 'react';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Catalog from './components/Catalog';
import styled from 'styled-components';
import CatalogTwo from './components/Catalog2';
import Footer from './pages/Footer';

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = (values: { email: string; password: string }) => {
    console.log('Login values:', values);
    setAuthenticated(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <StyleCatalog>
          <Catalog />
          <CatalogTwo />
        </StyleCatalog>

        <Routes>
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/IPad" element={<IPad />} />
            <Route path="/IPhone" element={<IPhone />} />
            <Route path="/Whatch" element={<Whatch />} />
            <Route path="/AirPods" element={<AirPods />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<LoginForm onSubmit={handleLogin} />} />
          </>
        </Routes>
        {isAuthenticated && (
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              <ReplyAllIcon />
            </Button>
          </div>
        )}
      </Container>
      <>
        <Footer creator={''} />
      </>
    </ShoppingCartProvider>
  );
}

export default App;

const StyleCatalog = styled.div`
  display: flex;
  color: black;
  align-items: flex-end;
  justify-content: flex-end;
  position: fixed;
  z-index: 999;
  gap: 3rem;
`;
