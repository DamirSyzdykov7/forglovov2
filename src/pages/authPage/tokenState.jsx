/* eslint-disable react-refresh/only-export-components */
"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { loginInfo, logout } from "./tokenController";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkToken = async (token) => {
    try {
      const response = await axios.get("http://glovo/api/check-token", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.isValid;
    } catch (error) {
      console.error("Ошибка проверки токена:", error);
      return false;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const isValid = await checkToken(token);
        if (isValid) {
          setUser({ token });
        } else {
          localStorage.removeItem("accessToken");
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, [checkToken]); // Added checkToken to dependencies

  const handleRefresh = async () => {
    try {
      const refreshResponse = await axios.post(
        "http://glovo/api/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const newToken = refreshResponse.data.access_token;
      if (newToken) {
        localStorage.setItem("accessToken", newToken);
        setUser({ token: newToken });
        return newToken;
      }
    } catch (error) {
      console.error("Ошибка обновления токена:", error);
      setUser(null);
      localStorage.removeItem("accessToken");
    }
    return null;
  };

  const handleLogin = async (name, password) => {
    try {
      const response = await loginInfo(name, password);
      if (response?.access_token) {
        localStorage.setItem("accessToken", response.access_token);
        setUser({ token: response.access_token });
        return true;
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
    return false;
  };

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  useEffect(() => {
    const timeRefresh = setInterval(() => {
      handleRefresh();
    }, 59 * 60 * 1000);
    return () => clearInterval(timeRefresh);
  }, [handleRefresh]); // Added handleRefresh to dependencies

  if (loading) {
    return <div>Loading...</div>; // или любой другой индикатор загрузки
  }

  return (
    <AuthContext.Provider value={{ handleLogin, user, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
