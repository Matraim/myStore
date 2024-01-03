import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/SotreItem';
import { ipad } from '../data/itemsIpad';
import { useShoppingCart } from '../context/ShoppingCartContext';

const IPad: React.FC = () => {
  const { addToCart } = useShoppingCart();

  return (
    <>
      <h1>iPad</h1>
      <p>We are a fantastic company doing amazing things.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {ipad.map((item) => (
          <Col key={item.id}>
            <StoreItem description={''} onItemClick={addToCart} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default IPad;
