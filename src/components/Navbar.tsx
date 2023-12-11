import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingCart } from '../components/ShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const { openCart, cartQuantity, isOpen } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <HomeIcon />
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/Mac" as={NavLink}>
            Mac
          </Nav.Link>
          <Nav.Link to="/IPad" as={NavLink}>
            IPad
          </Nav.Link>
          <Nav.Link to="/IPhone" as={NavLink}>
            IPhone
          </Nav.Link>
          <Nav.Link to="/Whatch" as={NavLink}>
            Whatch
          </Nav.Link>
          <Nav.Link to="/AirPods" as={NavLink}>
            AirPods
          </Nav.Link>
          <Nav.Link to="/Accessories" as={NavLink}>
            Accessories
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{
            width: '3rem',
            height: '3rem',
            position: 'relative',
            background: 'none',
            borderRadius: '2rem',
          }}
        >
          <LocalGroceryStoreIcon fontSize="medium" style={{ color: 'black' }} />
          <div
            className="bg-black d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: '0',
              right: '0',
              left: '1.5rem',
              transform: 'translate(35%, 20%)',
              borderRadius: '2rem',
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
      {isOpen && <ShoppingCart isOpen={isOpen} />}
    </NavbarBs>
  );
};

export default Navbar;
