import { createContext, useContext, useState, useEffect } from "react";
import { ApiURLs } from "../constants/ApiURLs";
import axios from "axios";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => loadFromLocalStorage("user"));
  const [token, setToken] = useState(() => loadFromLocalStorage("token"));

  useEffect(() => {
    if (user) {
      saveToLocalStorage("user", user);
    } else {
      removeFromLocalStorage("user");
    }
  }, [user]);

  const login = async (email, password) => {
    const params = { _holidaze: true };
    try {
      const response = await axios.post(
        ApiURLs.LOGIN,
        { email, password },
        { params }
      );

      // Extract the token and user information from the response
      const userData = response.data.data;
      const user = {
        accessToken: userData.accessToken,
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
        avatar: userData.avatar,
        banner: userData.banner,
        venueManager: userData.venueManager,
      };

      setUser(user);
      saveToLocalStorage("user", user);
      saveToLocalStorage("token", userData.accessToken);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const register = async (userData) => {
    if (!userData.avatar || !userData.avatar.url) {
      throw new Error("Avatar URL is required");
    }
    try {
      const formattedData = {
        ...userData,
        venueManager: userData.venueManager || false,
      };
      const response = await axios.post(ApiURLs.REGISTER, formattedData);
      return response.data;
    } catch (error) {
      console.error("Registration failed", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeFromLocalStorage("token");
    removeFromLocalStorage("user");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
