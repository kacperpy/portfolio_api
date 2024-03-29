import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCreateAuthToken = () => {
  const [isLoadingAuthToken, setIsLoadingAuthToken] = useState(false);
  const navigate = useNavigate();

  const createAuthToken = (username: string, password: string) => {
    setIsLoadingAuthToken(true);
    console.log("\nFETCHING AUTH TOKEN...\n");
    axios
      .post(
        "http://46.41.137.226/api-auth-token/",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response: { data: any }) => {
        const token = response.data.token;
        localStorage.setItem("portfolio_user_auth_token", token);
        localStorage.setItem("portfolio_authed_user", username);
        window.dispatchEvent(new Event("storage"));
        console.log("\nAUTH TOKEN HAS BEEN FETCHED\n");
      })
      .catch((error: any) => {
        console.error("Error fetching auth token: ", error);
      })
      .finally(() => {
        setIsLoadingAuthToken(false);
        navigate("/client");
      });
  };

  return { isLoadingAuthToken, createAuthToken };
};
