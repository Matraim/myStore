import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { phone } from '../data/itemsIphone';
import { useShoppingCart } from '../context/ShoppingCartContext';

const IPhone: React.FC = () => {
  const { addToCart } = useShoppingCart();

  return (
    <>
      <h1>iPhone</h1>
      <p>We are a fantastic company doing amazing Whatch.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {phone.map((item) => (
          <Col key={item.id}>
            <StoreItem onItemClick={addToCart} description={''} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default IPhone;
