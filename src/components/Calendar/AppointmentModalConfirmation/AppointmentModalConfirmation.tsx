import { ReactElement } from "react";
import { Button, Modal } from "react-bootstrap";

type ConfirmationModalProps = {
  showModal: boolean;
  handleClose: () => void;
};

export function ConfirmationModal({ showModal, handleClose }: ConfirmationModalProps): ReactElement {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rezerwacja zakończona sukcesem</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Twoja wizyta została pomyślnie zarezerwowana.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
}
