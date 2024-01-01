import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { ipad } from '../data/itemsIpad.ts';

const iPad: React.FC = () => {
  return (
    <>
      <h1>iPad</h1>
      <p>We are a fantastic company doing amazing things.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {ipad.map((item) => (
          <Col key={item.id}>
            <StoreItem
              onItemClick={(item) => {
                console.log('Add to cart:', item);
              }}
              description={''}
              {...item}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default iPad;
