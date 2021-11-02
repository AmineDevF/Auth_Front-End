import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.2:8000";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [contextUser, setContextUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        contextUser,
        setContextUser,
        error,
        login: (email, password) => {
          axios
            .post("/api/connexion", {
              email,
              password,
            })
            .then((response) => {
              console.log(response);
              const userResponse = {
                nom: response.data.user.nom,
                id: response.data.user.id,
                prenom: response.data.user.prenom,
                token: response.data.token,
                email: response.data.user.email,
                photo: response.data.user.photo,
                ville: response.data.user.ville,
                adresse: response.data.user.adresse,
              };

              setUser(userResponse);
              setContextUser(userResponse);
              setError(null);
              SecureStore.setItemAsync("user", JSON.stringify(userResponse));
            })
            .catch((error) => {
              if (error) {
                setError("Email ou password son incorrect !");
              }
            });
        },
        register: (email, nom, password, password_cofirmation) => {
          axios
            .post("/api/inscription", {
              email,
              nom,
              password,
              password_cofirmation,
            })
            .then((response) => {
              console.log(response);
              const userResponse = {
                nom: response.data.user.nom,
                id: response.data.user.id,

                token: response.data.token,
                email: response.data.user.email,
              };

              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync("user", JSON.stringify(userResponse));
            })
            .catch((error) => {
              if (error) {
                setError("Email ou password son incorrect !");
              }
            });
        },
        logout: () => {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.token}`;

          axios
            .post("/api/logout")

            .then((response) => {
              setUser(null);
              SecureStore.deleteItemAsync("user");
              console.log("you are logged out");
            })

            .catch((error) => {
              console.log(error.response);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
