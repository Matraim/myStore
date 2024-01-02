import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { items } from '../data/storeItemsAirPods.ts';
import { useShoppingCart } from '../context/ShoppingCartContext.tsx';

const AirPods: React.FC = () => {
  const { addToCart } = useShoppingCart();
  return (
    <>
      <h1>Apple AirPods</h1>
      <p>We are a fantastic company doing amazing things.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem onItemClick={addToCart} description={''} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AirPods;
