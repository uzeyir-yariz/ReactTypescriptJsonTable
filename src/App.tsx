/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Users } from "./components/Demo";

export default function App() {
  // Demo(); // Demo fonksiyonunu çağırabilirsiniz

  return (
    <>
      <h1>Yeniden Yapılandırma</h1>
      <div>
        {Users.map((user: { id: any }) => (
          <React.Fragment key={user.id}>
            <p>{user.id}</p>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
