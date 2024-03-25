import { AddNewUser } from "./AddNewUser";
import { DeleteJson } from "./DeletJson";
// import { SelectUser } from "./SelectUser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { SelectedUser } from "./SelectedUser";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export function ShowJson() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  // Yerel depolamadan kullanıcı verilerini al
  const storedUsers = localStorage.getItem("users");
  const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

  // Seçilen kullanıcının ID'sini tutan durum
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // Seçilen kullanıcıyı bulma fonksiyonu

  return (
    <>
      <table className="table table-dark table-striped table-hover">
        <tbody>
          <tr className="border border-0">
            <td>#</td>
            <td>first name</td>
            <td>last name</td>
            <td>email</td>
            <td>gender</td>
            <td>ip</td>
          </tr>

          {users.map((user) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedUserId(user.id)}
              key={user.id}
            >
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        show={selectedUserId !== null}
        onHide={() => setSelectedUserId(null)}
        centered
      >
        <Modal.Header closeButton className="bg-dark text-white ">
          <Modal.Title>Edit or Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          {selectedUserId !== null && (
            <div className="d-flex justify-content-end gap-4">
              <Button
                variant="primary"
                className="mr-2"
                onClick={() => {
                  // Edit action
                  const selectedUserIdEdit = parseInt(
                    selectedUserId.toString() + "1"
                  );
                  SelectedUser(selectedUserIdEdit);
                  setSelectedUserId(null);
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  // Delete action
                  // console.log("Delete user with ID:", selectedUserId);
                  const selectedUserIdEdit = parseInt(
                    selectedUserId.toString() + "0"
                  );
                  SelectedUser(selectedUserIdEdit);
                  setSelectedUserId(null);
                }}
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setSelectedUserId(null);
                }}
              >
                close
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <div className="p-3">
        <Button onClick={handleShowModal} className="w-100">Add New User</Button>
        <AddNewUser
          show={showModal}
          onHide={handleHideModal}
        />
        <DeleteJson />
      </div>
    </>
  );
}
