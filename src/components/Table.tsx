import { Button, Modal } from "react-bootstrap";
import { Users } from "./PullUsers";
import React from "react";
import { ServiceDeleteUser } from "./Service/ServiceDeleteUser";
import { ServiceEditUser } from "./Service/ServiceEditUser";
interface User {
  id: number;
  first_name: string;
  last_name: string;
  ip_address: string;
  gender: string;
  email: string;
}

export function Table() {
  const [show, setShow] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(
    null
  );
  const handleClose = () => setShow(false);
  const handleShow = (ID: number) => {
    setSelectedUserId(ID);
    setShow(true);
  };

  return (
    <>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>isim</th>
            <th>soy isim</th>
            <th>email</th>
            <th>cinsiyet</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {Users ? (
            Users.map((user: User) => (
              <tr
                key={user.id}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleShow(user.id);
                }}
              >
                <td> {user.id}</td>
                <td> {user.first_name} </td>
                <td> {user.last_name} </td>
                <td> {user.email} </td>
                <td> {user.gender} </td>
                <td> {user.ip_address} </td>
              </tr>
            ))
          ) : (
            <tr
              className="text-center fst-italic"
              style={{ cursor: "pointer" }}
            >
              <td colSpan={6}>Hiç Kullanıcı Yok</td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="bg-dark">
          <Modal.Title>Kullanıcıyı Düzenle / Sil</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="bg-dark">
          <Button
            variant="primary"
            type="button"
            className="mt-4 w-25"
            onClick={() => {
              if (selectedUserId !== null) {
                const ID = selectedUserId;
                ServiceEditUser(ID);
                handleClose();
              }
            }}
          >
            Düzenle
          </Button>
          <Button
            variant="danger"
            type="button"
            className="mt-4 w-25"
            onClick={() => {
              if (selectedUserId !== null) { // ! burayı bir daha silme
                const ID = selectedUserId;
                ServiceDeleteUser(ID);
                handleClose();
              }
            }}
          >
            Kullanıcıyı Sil
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="mt-4 w-25"
            onClick={handleClose}
          >
            İptal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
