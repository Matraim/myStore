import { Col, Row } from 'react-bootstrap';
import { phone } from '../data/itemsIphone';
import StoreItem from '../components/SotreItem';

const IPhone = () => {
  return (
    <>
      <h1>Iphone</h1>
      <p>We are a fantastic company doing amazing Whatch.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {phone.map((item) => (
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
