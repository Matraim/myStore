import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingCart } from '../components/ShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import HomeIcon from '@mui/icons-material/Home';
import AccountMenu from './AccountMenu';

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
            border: 'none',
          }}
        >
          <LocalGroceryStoreIcon fontSize="medium" style={{ color: 'black' }} />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: '1rem',
              height: '1rem',
              color: 'white',
              position: 'absolute',
              bottom: '5px',
              fontSize: '0.7rem',
              right: '0',
              left: '1.6rem',
              transform: 'translate(25%, 20%)',
              borderRadius: '1rem',
              background: '#337aba',
            }}
          >
            {cartQuantity}
          </div>
        </Button>
        <AccountMenu />
      </Container>

      {isOpen && <ShoppingCart isOpen={isOpen} />}
    </NavbarBs>
  );
};

export default Navbar;
