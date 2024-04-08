/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Users } from "../PullUsers";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  ip_address: string;
  gender: string;
  email: string;
}

export function ServiceEditUser(ID: any): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const selectUser = Users.find((user: User) => user.id === ID.ID);
    if (selectUser) {
      setUser(selectUser);
    } else {
      console.error("Kullanıcı bulunamadı");
    }
  }, [ID.ID]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser!,
      [name]: value,
    }));
  };

  // Form güncelleme işlemi
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userIndex = Users.findIndex((u: User) => u.id === user?.id);

    if (userIndex !== -1) {
      Users[userIndex] = user!;
      localStorage.setItem("users", JSON.stringify(Users));
    }
    window.location.reload();
  };

  return (
    <div className="mt-4">
      <h4 className="alert alert-info">
        <span className="mx-2 text-capitalize">
          {user ? `${user.first_name} ${user.last_name}` : "Kullanıcı"},
        </span>
        düzenleniyor
      </h4>
      {user && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              Adınız
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={user.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Soyadınız
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={user.last_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-posta adresiniz
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Cinsiyetiniz
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ip_address" className="form-label">
              IP Adresiniz
            </label>
            <input
              type="text"
              className="form-control"
              id="ip_address"
              name="ip_address"
              value={user.ip_address}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Kullanıcıyı güncelle
          </button>
        </form>
      )}
    </div>
  );
}
