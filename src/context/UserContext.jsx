import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John DOe",
    email: "john@doe.com",
  });
  const [token, setToken] = useState();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? null);
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, API_BASE_URL, token, setToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
