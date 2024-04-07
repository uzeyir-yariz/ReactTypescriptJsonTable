import { ServiceAddUser } from "./components/Service/ServiceAddUser";
import { ServiceDeleteAll } from "./components/Service/ServiceDelteAll";
import { Table } from "./components/Table";

export default function App() {
  return (
    <>
      <Table />
      <ServiceAddUser />
      <ServiceDeleteAll />
    </>
  );
}
