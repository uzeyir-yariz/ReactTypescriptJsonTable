import { DeleteUser } from "./DeleteUser";
import { EditUserGetID } from "./EditUser";

export function SelectedUser(selectedUserIdEdit: number) {
  const lastDigit = selectedUserIdEdit % 10;
  const ID = Math.floor(selectedUserIdEdit / 10);

  if (lastDigit === 1) {
    EditUserGetID(ID);
  } else {
    DeleteUser(ID);
  }
}
