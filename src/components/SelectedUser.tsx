/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { DeleteUser } from "./DeleteUser";
import { EditUser } from "./EditUser";

const updatedData = null;

export function SelectedUser(selectedUserIdEdit: number) {
  const lastDigit = selectedUserIdEdit % 10;
  const ID = Math.floor(selectedUserIdEdit / 10);

  if (lastDigit === 1) {
    const rawUsers = localStorage.getItem("users");

    if (rawUsers) {
      const users = JSON.parse(rawUsers);
      const userExist = users.find((user: any) => user.id === ID);
      console.log(userExist);

      return <SelectedUserModal content={"selam sam"} ID={userExist.id} show={false}/>;
      
      EditUser(ID, updatedData);
    }
  } else {
    DeleteUser(ID);
  }

  return false; // Modal'ın gösterilmemesi için false döndür
}

export const SelectedUserModal = ({
  content,
  ID,
  show,
}: {
  content: string;
  ID: number;
  show: boolean;
}) => {
  const [showModal, setShowModal] = useState(show); // show propu doğrudan showModal state'ine atanıyor
  SelectedUser(0);

  ID;

  useEffect(() => {
    setShowModal(show); // show propu değiştiğinde showModal state'i güncelleniyor
  }, [show]);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <h1>{content}</h1>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Başlık</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal içeriği buraya gelecek.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
