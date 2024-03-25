``` tsx
interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function SelectUser(i: number) {
  console.log("silinen kullanıcı ID'si : ", i);

  const userData = localStorage.getItem("users");
  if (userData) {
    const users: User[] = JSON.parse(userData);
    const SelectedUser = users.find((user) => user.id === i);

    if (SelectedUser) {
      // silme işlemi yerine kullanıcıya bir adet doğrulama atıyor
      const confirmation = window.confirm(
        `are you sure ${SelectedUser.first_name} ${SelectedUser.last_name} we cant go back user`
      );

      if (confirmation) {
        // Kullanıcıyı listeden filtreleyin ve silinmesi gereken kullanıcıyı hariç tutun
        const filteredUsers = users.filter((user) => user.id !== i);

        // Filtrelenmiş kullanıcıları localStorage'e geri yazın
        localStorage.setItem("users", JSON.stringify(filteredUsers));

        // İşlem tamamlandıktan sonra sayfayı yenileyin
        window.location.reload();
      }
    }
  }
}
```