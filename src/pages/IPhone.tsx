import { Col, Row } from 'react-bootstrap';
import itemsIphone from '../data/itemsIphone.json';
import StoreItem from '../components/SotreItem';

const IPhone = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Iphone</h1>
      <p style={{ textAlign: 'center' }}>
        We are a fantastic company doing amazing Whatch.
      </p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {itemsIphone.map((item) => (
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

export default IPhone;
