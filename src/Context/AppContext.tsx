import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

interface AppContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AppContext = createContext<AppContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});

export default function AppProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(null);

  async function getUser() {
    const res = await fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) setUser(data);
  }

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      setUser(null);
    }
  }, [token]);

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
