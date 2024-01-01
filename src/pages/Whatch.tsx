import React, { useState } from 'react';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import StoreItem, { StoreItemType } from '../components/SotreItem';
import { mac } from '../data/itemsMac';

interface WatchProps {}

const Watch: React.FC<WatchProps> = () => {
  const [selectedItem, setSelectedItem] = useState<StoreItemType | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = (item: StoreItemType) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Apple Watch</h1>
      <p>We are a fantastic company doing amazing Watch.</p>
      <Row md={2} sm={1} lg={3} className="g-3">
        {mac.map((item) => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              description="hello"
              onItemClick={handleItemClick}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem ? (
            <p>{selectedItem.description}</p>
          ) : (
            <p>No description available</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Watch;
