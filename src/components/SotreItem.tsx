import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilites/formatCurrency.ts';
import { useShoppingCart } from '../context/ShoppingCartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="400px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="fs-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              variant="primary"
              onClick={() => increaseCartQuantity(id)}
              style={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div>
                  <Button onClick={() => decreaseCartQuantity(id)}>
                    <RemoveIcon />
                  </Button>
                  <span className="fs-3">
                    {' '}
                    {getItemQuantity(id)} В корзине{' '}
                  </span>
                  <Button onClick={() => increaseCartQuantity(id)}>
                    <AddIcon />
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  <RemoveDoneIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
