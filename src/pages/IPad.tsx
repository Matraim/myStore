import { Col, Row } from 'react-bootstrap';
import ItemsIpad from '../data/itemsIpad.json';
import StoreItem from '../components/SotreItem';

const IPad = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>iPad</h1>
      <p style={{ textAlign: 'center' }}>
        We are a fantastic company doing amazing Whatch.
      </p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {ItemsIpad.map((item) => (
          <Col key={item.id}>
            <StoreItem
              onItemClick={function (): void {
                throw new Error('Function not implemented.');
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

export default IPad;
