import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { MacBook } from '../data/storeItemsWhatch';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Mac: React.FC = () => {
  const { addToCart } = useShoppingCart();

  return (
    <>
      <h1>MacBook</h1>
      <p>We are a fantastic company doing amazing Whatch.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {MacBook.map((item) => (
          <Col key={item.id}>
            <StoreItem onItemClick={addToCart} description={''} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Mac;
