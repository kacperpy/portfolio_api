import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  function getUserFromLocalStorage() {
    return localStorage.getItem("portfolio_authed_user") || null;
  }

  function updateUser() {
    setUser(getUserFromLocalStorage());
  }

  useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);

  return { user, updateUser };
};
