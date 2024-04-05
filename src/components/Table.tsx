import { Users } from "./PullUsers";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  ip_address: string;
  gender: string;
  email: string;
}

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
          {Users ? (
            Users.map((user: User) => (
              <tr
                key={user.id}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  alert("hello world");

                  // buraya tıklanıldığında burada bir Modal açılacak ve şöyle demesi gerekicek 
                  // güncelle, sil iptal seöçenekleri olacak
                }}
              >
                <td> {user.id}</td>
                <td> {user.first_name} </td>
                <td> {user.last_name} </td>
                <td> {user.email} </td>
                <td> {user.gender} </td>
                <td> {user.ip_address} </td>
              </tr>
            ))
          ) : (
            <tr
              className="text-center fst-italic"
              style={{ cursor: "pointer" }}
            >
              <td colSpan={6}>Hiç Kullanıcı Yok</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
