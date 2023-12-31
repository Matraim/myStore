import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { ipad } from '../data/itemsIpad';

const iPad = () => {
  return (
    <>
      <h1 className="text-center">iPad</h1>
      <p className="text-center">
        We are a fantastic company doing amazing things.
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
    </>
  );
};

export default iPad;
