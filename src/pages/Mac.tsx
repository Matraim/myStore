import { Col, Row } from 'react-bootstrap';
import storeItemsMac from '../data/itemsMac.json';
import StoreItem from '../components/SotreItem';

const Mac = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>MacBook</h1>
      <p style={{ textAlign: 'center' }}>
        We are a fantastic company doing amazing Whatch.
      </p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {storeItemsMac.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Mac;
