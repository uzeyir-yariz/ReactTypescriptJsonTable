import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ServiceDeleteAll = () => {

    const [show, setShow] = useState(false);
    const handleShowModal = () => setShow(true)
    const handleHideModal = () => setShow(false)
    const handleConfirm = () => {
        console.log("veriler siliniyor");
        localStorage.clear();
        handleHideModal();
        window.location.reload();
    }

  return (
    <>
      <input
        type="button"
        value="Tüm Kullanıcıları Sil"
        className="btn btn-danger w-100 mt-4"
        onClick={handleShowModal}
      />
      <Modal show={show} onHide={handleHideModal} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>
            tüm verileri silmek istediğinize emin misiniz ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="danger" onClick={handleConfirm}>
            Sil
          </Button>
          <Button variant="secondary" onClick={handleHideModal}>
            İptal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
