import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { MacBook } from '../data/storeItemsWhatch';

const Mac = () => {
  return (
    <>
      <h1>MacBook</h1>
      <p>We are a fantastic company doing amazing Whatch.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {MacBook.map((item) => (
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

export default Mac;
