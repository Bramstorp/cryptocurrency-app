import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onRegister = (username, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    axios.post('http://fdc2-185-93-84-251.ngrok.io/users', {
        username: username,
        password_hash: password
    })
    .then(function (response) {
        setUser(response);
        setIsLoading(false);
    })
    .catch(function (error) {
        setIsLoading(false);
        setError(error.toString());
    });

    };

    const onLogin = (username, password) => {
        setIsLoading(true);
        axios.post('http://fdc2-185-93-84-251.ngrok.io/token', {
            username: username,
            password_hash: password
        })
        .then(function (response) {
            console.log(response)
            setUser(response);
            setIsLoading(false);
        })
        .catch(function (error) {
            setIsLoading(false);
            setError(error.toString());
        });
    };


    
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        onRegister,
        onLogin,
        user,
        error,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};