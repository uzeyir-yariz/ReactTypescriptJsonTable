import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function AddNewUser({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form verilerini alın
    const { first_name, last_name, email, gender, ip_address } = formData;

    // Form verilerini kontrol edin
    if (!first_name || !last_name || !email || !gender || !ip_address) {
      return;
    }

    // Mevcut kullanıcılar verisini yerel depolamadan al
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    function findMissingID(users: { id: number }[]) {
      users.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      let missingID = 1;
      for (let i = 0; i < users.length; i++) {
        if (users[i].id !== missingID) {
          // Eğer eksik ID bulunursa, bu ID'yi döndür
          return missingID;
        }
        // Eğer mevcut ID varsa, bir sonraki ID'yi kontrol etmek için 1 artır
        missingID++;
      }

      // Eğer listenin sonuna kadar eksik bir ID bulunmazsa, sonraki ID'yi döndür
      return missingID;
    }

    const missingID = findMissingID(users);
    const newUser = {
      id: missingID,
      first_name,
      last_name,
      email,
      gender,
      ip_address,
    };

    // Yeni kullanıcıyı eklemek için AddNewUser fonksiyonunu çağırın
    users.push(newUser);

    // güncellenmiş veriyi yaz
    localStorage.setItem("users", JSON.stringify(users));

    // Form verilerini sıfırlayın
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    });

    console.log("Yeni kullanıcı başarıyla eklendi:", newUser);

    window.location.reload();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <form onSubmit={handleSubmit}>
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
          <Button variant="secondary" type="button" className="mt-4 w-100" onClick={onHide}>
            cancel
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
