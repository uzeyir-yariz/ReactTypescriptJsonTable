/* eslint-disable @typescript-eslint/no-explicit-any */
export const EditUser = (ID: number, updatedData: any) => {
  const rawUsers = localStorage.getItem("users");

  if (rawUsers) {
    const users = JSON.parse(rawUsers);

    // Kullanıcıyı bul ve güncelle
    const updatedUsers = users.map((user: any) => {
      if (ID === user.id) {
        // Kullanıcının verilerini güncelle
        return { ...user, ...updatedData };
      }
      return user;
    });

    // Güncellenmiş kullanıcı verisini localStorage'e kaydet
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
};