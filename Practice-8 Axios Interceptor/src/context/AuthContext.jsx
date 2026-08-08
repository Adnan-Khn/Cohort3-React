import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("users"))||[]);
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser"))||null);
  return (
    <AuthStore.Provider
      value={{ registeredUser, setRegisteredUser, loggedUser, setLoggedUser }}
    >
      {children}
    </AuthStore.Provider>
  );
};
