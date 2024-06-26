import { Users } from "../PullUsers";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  ip_address: string;
  gender: string;
  email: string;
}

export function ServiceDeleteUser(ID: number) {
  if (Users) {
    const selectUser = Users.find((user: User) => user.id === ID);
    if (selectUser) {
      const confirmation = window.confirm(
        `Bu ${selectUser.first_name}, ${selectUser.last_name} silmek istediğinize emin misiniz ?`
      );
      if (confirmation) {
        // burada silme işlemi gerçekeleşecektir
        const filtredUser = Users.filter((user: User) => user.id !== ID);
        localStorage.setItem("users", JSON.stringify(filtredUser));
        window.location.reload();
      } else {
        window.location.reload();
      }
    }
  }

  console.log(ID);
  return;
}
