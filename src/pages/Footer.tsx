import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface FooterProps {
  creator: string;
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  color: white;
  padding: 45px;
  position: absolute;
  width: 100%;

  div {
    flex: 1;
    margin: 0 10px;
  }

  h3 {
    color: #61dafb;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Footer: React.FC<FooterProps> = ({ creator }) => {
  return (
    <StyledFooter>
      <div>
        <h3>Address</h3>
        <p>Tynystanov 571 Manas, Bishke, Kyrgyzstan</p>
      </div>
      <div>
        <h3>Delivery</h3>
        <p>Contact us for delivery options</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+123 456 7890</a>
        </p>
      </div>
      <div>
        <h3>Products</h3>
        <ul>
          <li>
            <Link to="/iphone">iPhone</Link>
          </li>
          <li>
            <Link to="/ipad">iPad</Link>
          </li>
          <li>
            <Link to="/Whatch">Watch</Link>
          </li>
          <li>
            <Link to="/mac">Mac</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>About</h3>
        <ul>
          {' '}
          <Link to="./About">About Team {creator}</Link>
        </ul>

        <ul>
          <Link to="https://github.com/Matraim">My GitHub</Link>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
