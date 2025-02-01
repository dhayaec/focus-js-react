"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const MyComponent = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div>
          <p>{`Welcome ${user}`}</p>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => login("John")}>login</button>
        </div>
      )}
    </>
  );
};
