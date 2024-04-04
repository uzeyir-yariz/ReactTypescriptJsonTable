import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Users } from "../PullUsers";

export function ServiceAddUser() {
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);
  const handleHideModal = () => setShow(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { first_name, last_name, email, gender, ip_address } = formData;

    if (!first_name || !last_name || !email || !gender || !ip_address) {
      alert("Tüm Verileri Doğru Doldurun");
      return;
    }

    const users = Users ? Users : [];

    function findMissingID(users: { id: number }[]) {
      users.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      let missingID = 1;
      for (let i = 0; i < users.length; i++) {
        if (users[i].id !== missingID) {
          return missingID;
        }
        missingID++;
      }
      return missingID;
    }

    const missingID = findMissingID(users);
    const newUserAdd = {
      id: missingID,
      first_name,
      last_name,
      email,
      gender,
      ip_address,
    };

    users.push(newUserAdd);

    localStorage.setItem("users", JSON.stringify(users));

    // Form verilerini sıfırlayın
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    });

    console.log("yeni kullanıcı eklendi : ", newUserAdd);

    handleHideModal();
    window.location.reload();
  };

  return (
    <>
      <input
        type="button"
        value="Kullanıcı Ekle"
        className="btn btn-primary w-100 mt-4"
        onClick={handleShowModal}
      />
      <Modal show={show} onHide={handleHideModal} centered>
        <Modal.Header className="bg-dark" closeButton>
          Yeni Kullanıcı Ekleniyor
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <form onSubmit={handleConfirm}>
            <div className="form-group mt-2">
              <label htmlFor="first_name">First Name</label>
              <input
                required
                className="form-control"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="last_name">Last Name</label>
              <input
                required
                className="form-control"
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="gender">Gender</label>
              <input
                required
                className="form-control"
                type="text"
                id="gender"
                name="gender"
                placeholder="Enter Gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="ip_address">Ip Address</label>
              <input
                required
                className="form-control"
                type="text"
                id="ip_address"
                name="ip_address"
                placeholder="Enter IP address"
                value={formData.ip_address}
                onChange={handleChange}
              />
            </div>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Submit
            </Button>
            <Button
              variant="secondary"
              type="button"
              className="mt-4 w-100"
              onClick={handleHideModal}
            >
              cancel
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
