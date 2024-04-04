/* eslint-disable react-refresh/only-export-components */
const rawUsers = localStorage.getItem("users");
export const Users = rawUsers ? JSON.parse(rawUsers) : null; 