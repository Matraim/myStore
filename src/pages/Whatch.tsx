import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import storeItemsWhatch from '../data/storeItemsWhatch.json';

const Whatch = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Apple Whatch</h1>
      <p style={{ textAlign: 'center' }}>
        We are a fantastic company doing amazing Whatch.
      </p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {storeItemsWhatch.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Whatch;
