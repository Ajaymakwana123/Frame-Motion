import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [user, setuser] = useState([
    { id: 0, username: "ajay", email: "ajay@gmail.com", city: "Surat" },
    { id: 1, username: "vijay", email: "vijay@gmail.com", city: "bhavnagar" },
    { id: 2, username: "sanajy", email: "sanajy@gmail.com", city: "amdavad" },
  ]);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
