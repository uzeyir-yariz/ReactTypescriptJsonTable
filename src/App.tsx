import { AddUser } from "./components/AddUser";
import { DeleteAllUsers } from "./components/DeleteAllUsers";
import { Table } from "./components/Table";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function App() {
  return (
    <>
      <Table />
      <AddUser />
      <DeleteAllUsers />
    </>
  );
}
