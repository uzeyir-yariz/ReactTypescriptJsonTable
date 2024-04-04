import { Button, Modal } from "react-bootstrap";

interface props{
  show: boolean;
  onHide(): void;
  onConfirm(): void;
  message: string;
}

export const CheckModal = ({show, onHide, onConfirm, message}: props) => {

  // ! check görüntülemede hata veriyor tek yerde yapılsa daha iyi olur 

  return(
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>
          tüm verileri silmek istediğinize emin misiniz ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">{message}</Modal.Body>
      <Modal.Footer className="bg-dark text-white">
        <Button variant="secondary" onClick={onHide}>İptal</Button>
        <Button variant="danger" onClick={onConfirm}>Sil</Button>
      </Modal.Footer>
    </Modal>
  )
};
