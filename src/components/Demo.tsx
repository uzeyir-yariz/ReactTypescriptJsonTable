/* eslint-disable react-refresh/only-export-components */

const rawUsers = localStorage.getItem("users");
export const Users = rawUsers ? JSON.parse(rawUsers) : null;

interface UserData {
  firstName: string;
  lastName: string;
  gender: string;
  city: string;
}

export function saveUserData(userData: UserData): void {
  const jsonData = JSON.stringify(userData);
  localStorage.setItem("userData", jsonData);
}

export function Demo() {}
