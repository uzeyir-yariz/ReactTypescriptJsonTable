import { useState } from "react";
import { ServiceAddUser } from "./components/Service/ServiceAddUser";
import { ServiceDeleteAll } from "./components/Service/ServiceDelteAll";
import { ServiceEditUser } from "./components/Service/ServiceEditUser";
import { Table } from "./components/Table";

export default function App() {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleEditClick = (ID: number) => {
    setSelectedUserId(ID);
    console.log(ID)
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  return (
    <>
      <Table onEditClick={handleEditClick} />
      <ServiceAddUser />
      <ServiceDeleteAll />
      {showEditForm && (
        <ServiceEditUser ID={selectedUserId} onClose={handleCloseForm} />
      )}
    </>
  );
}
