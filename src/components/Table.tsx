import { Users } from "./Demo";

export function Table() {
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
            // TODO: #9 buradaki yazıları İnterface haline getir bu sayede daha düzenli durur
          {Users.map(
            (user: {
              id: number;
              first_name: string;
              last_name: string;
              ip_address: string;
              gender: string;
              email: string;
            }) => (
              <tr key={user.id}>
                <td> {user.id} </td>
                <td> {user.first_name} </td>
                <td> {user.last_name} </td>
                <td> {user.email} </td>
                <td> {user.gender} </td>
                <td> {user.ip_address} </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
