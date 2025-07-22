import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem('user-info');
    return data ? JSON.parse(data) : null;
  });

  useEffect(() => {
    const data = localStorage.getItem('user-info');
    if (data) setUser(JSON.parse(data));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
