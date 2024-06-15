import { Button, Modal } from "react-bootstrap";

type showConfirmationModalProps = {
  showConfirmationModal: boolean;
  handleCloseConfirmationModal: () => void;
}

export function ContactPageConfirmationModal({ showConfirmationModal, handleCloseConfirmationModal } : showConfirmationModalProps) {
  return (
    <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
    <Modal.Header closeButton>
      <Modal.Title>Wiadomość wysłana</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Twoja wiadomość została pomyślnie wysłana.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success" onClick={handleCloseConfirmationModal}>Zamknij</Button>
    </Modal.Footer>
  </Modal>
  )
}
