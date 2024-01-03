import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingCart } from '../components/ShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AppleIcon from '@mui/icons-material/Apple';
import AccountMenu from './AccountMenu';
import styled from 'styled-components';

const StyledNavbar = styled(NavbarBs)`
  &.bg-white {
    background-color: #fff;
  }

  .navbar-brand {
    cursor: pointer;
  }

  .nav-link {
    color: #000;
    margin-right: 10px;

    &:hover {
      color: #337aba;
    }
  }

  .shopping-cart-btn {
    width: 3rem;
    height: 3rem;
    position: relative;
    background: none;
    border: none;

    .cart-icon {
      font-size: 1.5rem;
      color: black;
    }

    .cart-badge {
      width: 1rem;
      height: 1rem;
      color: white;
      position: absolute;
      bottom: 5px;
      right: 0;
      left: 1.6rem;
      transform: translate(25%, 20%);
      border-radius: 1rem;
      background: #337aba;
      font-size: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 768px) {
      .navbar-brand,
      .nav-link {
        font-size: 14px;
        margin-right: 5px;
      }

      .shopping-cart-btn {
        width: 2.5rem;
        height: 2.5rem;
        .cart-icon {
          font-size: 1.2rem;
        }
        .cart-badge {
          width: 0.8rem;
          height: 0.8rem;
          font-size: 0.5rem;
        }
      }
    }
  }
`;

const Navbar = () => {
  const { openCart, cartQuantity, isOpen } = useShoppingCart();

  return (
    <StyledNavbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className="navbar-brand">
            <AppleIcon />
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
        <Button onClick={openCart} className="shopping-cart-btn">
          <LocalGroceryStoreIcon className="cart-icon" />
          <div className="cart-badge">{cartQuantity}</div>
        </Button>
        <AccountMenu />
      </Container>
      {isOpen && (
        <ShoppingCart
          isOpen={isOpen}
          id={0}
          name={''}
          price={0}
          description={''}
          imgUrl={''}
          onItemClick={() => {}}
        />
      )}
    </StyledNavbar>
  );
};

export default Navbar;
