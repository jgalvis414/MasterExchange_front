import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Instancias de endpoint
import {API, endpoint} from "../instances/instances.js"
import swal from 'sweetalert'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await API.post(endpoint.CREATE_TOKEN,
      JSON.stringify({ email, password })
    );
        if (response.data == null) {
          return swal({
            title:'Error al iniciar sesion',
            text: 'Sus credenciales no son validas',
            icon: 'error',

          })

        }
    console.log("login", response.data);

    //api create una sesion de user
    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    setUser(loggedUser);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
