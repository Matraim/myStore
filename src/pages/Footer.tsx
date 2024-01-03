import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface FooterProps {
  creator: string;
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 20px;
  width: 100%;

  div {
    flex: 1;
    margin: 10px 0;
    text-align: center;
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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    div {
      margin: 0 10px;
    }
  }

  @media (min-width: 1024px) {
    padding: 40px;
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
            <Link to="/watch">Watch</Link>
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
          <Link to="./about">About Team {creator}</Link>
        </ul>

        <ul>
          <a href="https://github.com/Matraim">My GitHub</a>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
