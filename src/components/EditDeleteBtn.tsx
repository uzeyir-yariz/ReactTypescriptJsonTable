import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export function EditDelteBtn({
  selectedUserIdEdit,
  show,
  onHide,
  user,
  onUpdateUser,
}: {
  selectedUserIdEdit: number,
  show: boolean;
  onHide: () => void;
  user: User; // Güncellenmesi gereken kullanıcı
  onUpdateUser: (updatedUser: User) => void; // Kullanıcıyı güncelleme fonksiyonu
}) {
  const lastDigit = selectedUserIdEdit % 10;
  const ID = Math.floor(selectedUserIdEdit / 10);
  const userData = localStorage.getItem("users");
  console.log(ID);
  const [updatedUserData, setUpdatedUserData] = useState<User>({
    ...user, // Başlangıçta mevcut kullanıcının bilgilerini göster
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Güncellenmiş kullanıcı verilerini yolla
    onUpdateUser(updatedUserData);
  };

  if (lastDigit === 1) {
    console.log("editing : ", ID);

    if (userData) {
      const users: User[] = JSON.parse(userData);
      const SelectedUser = users.find((user) => user.id === ID);

      console.log("Selected User is :", SelectedUser?.id);
    }
  } else {
    console.log("deleting : ", ID);
    if (userData) {
      const users: User[] = JSON.parse(userData);
      const SelectedUser = users.find((user) => user.id === ID);

      if (SelectedUser) {
        // silme işlemi yerine kullanıcıya bir adet doğrulama atıyor
        const confirmation = window.confirm(
          `are you sure ${SelectedUser.first_name} ${SelectedUser.last_name} we cant go back user`
        );

        if (confirmation) {
          // Kullanıcıyı listeden filtreleyin ve silinmesi gereken kullanıcıyı hariç tutun
          const filteredUsers = users.filter((user) => user.id !== ID);

          // Filtrelenmiş kullanıcıları localStorage'e geri yazın
          localStorage.setItem("users", JSON.stringify(filteredUsers));

          // İşlem tamamlandıktan sonra sayfayı yenileyin
          window.location.reload();
        }
      }
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={updatedUserData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={updatedUserData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={updatedUserData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={updatedUserData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ip_address">IP Address</label>
            <input
              type="text"
              className="form-control"
              id="ip_address"
              name="ip_address"
              value={updatedUserData.ip_address}
              onChange={handleChange}
            />
          </div>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
