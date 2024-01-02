import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { ipad } from '../data/itemsIpad.ts';
import { useShoppingCart } from '../context/ShoppingCartContext.tsx';

const iPad: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart } = useShoppingCart();
  return (
    <>
      <h1>iPad</h1>
      <p>We are a fantastic company doing amazing things.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {ipad.map((item) => (
          <Col key={item.id}>
            <StoreItem onItemClick={addToCart} description={''} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default iPad;
