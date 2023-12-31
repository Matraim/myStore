import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { ipad } from '../data/itemsIpad';

const AirPods = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Apple AirPods</h1>
      <p style={{ textAlign: 'center' }}>
        We are a fantastic company doing amazing IPhonekbooks.
      </p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {ipad.map((item) => (
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
    </div>
  );
};

export default AirPods;
