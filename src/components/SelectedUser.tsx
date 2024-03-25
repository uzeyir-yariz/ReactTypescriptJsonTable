import { DeleteUser } from "./DeleteUser";

export function SelectedUser(selectedUserIdEdit: number) {
  const lastDigit = selectedUserIdEdit % 10;
  const ID = Math.floor(selectedUserIdEdit / 10);

  if (lastDigit === 1) {
    console.log("editing is : ", ID);
  } else {
    console.log("deleting is : ", ID);
    DeleteUser(ID);
  }
}
