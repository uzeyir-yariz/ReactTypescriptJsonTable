import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// burada çift doğrulama kullanılmakta eğer bir sorun ile karşılaşırsan şu kodu indirerek çözebilirsin
// npm install react-bootstrap bootstrap

export const DeleteJson = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteJson = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Button
        className="w-100 mt-4"
        variant="danger"
        onClick={handleDeleteJson}
      >
        Delete Data
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>Delete all Data ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          Are you sure you want to delete all data ?
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
