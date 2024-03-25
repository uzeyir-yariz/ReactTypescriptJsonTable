/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface EditUserProps {
  ID: number;
  handleShowModal: boolean;
  onClose: () => void;
}

export const EditUserGetID = (ID: number) => {
  console.log(ID);
};

export const EditUser: React.FC<EditUserProps> = ({
  ID,
  handleShowModal,
  onClose,
}) => {
  console.log(ID);
  console.log(handleShowModal);

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((user: any) => user.id === ID);

  if (!user) {
    return null; // Kullanıcı bulunamadıysa veya kullanıcı yoksa null döndür
  }

  return (
    <Modal centered show={handleShowModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Kullanıcı düzenleme formu */}
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              defaultValue={user.name} // users değil, user
            />
          </div>
          {/* Diğer kullanıcı bilgileri için gerekli inputlar eklenebilir */}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
        {/* Güncelleme butonu eklenebilir */}
      </Modal.Footer>
    </Modal>
  );
};
