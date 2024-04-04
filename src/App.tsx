import { ServiceAddUser } from "./components/Service/ServiceAddUser";
import { ServiceDeleteAll } from "./components/Service/ServiceDelteAll";
import { Table } from "./components/Table";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function App() {
  return (
    <>
      <Table />
      <ServiceAddUser />
      <ServiceDeleteAll />
    </>
  );
}
