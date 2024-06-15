import { Button, Modal } from "react-bootstrap";

type AccountEditModalConfirmationProps = {
  confirmationModal: boolean;
  handleCloseConfirmationModal: () => void;
};

export function AccountEditModalConfirmation({
  confirmationModal,
  handleCloseConfirmationModal,
}: AccountEditModalConfirmationProps) {
  return (
    <Modal show={confirmationModal} onHide={handleCloseConfirmationModal}>
      <Modal.Header closeButton>
        <Modal.Title>Zmiana danych zakończona sukcesem</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Twoje dane zostały pomyślnie zaktualizowane.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleCloseConfirmationModal}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
