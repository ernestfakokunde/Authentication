import { createContext, useState, useEffect, Children, useContext } from "react";

export const Authcontext = createContext();

export const Authprovider =({children})=>{
  const [token , setToken] = useState(localStorage.getItem("token") || null)

  //save token in both state + localstorage
  const login = (newToken)=>{
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  //remove token on logout
  const logout = () =>{
    setToken(null);
    localStorage.removeItem("token");
  }

  //keep track whether a user is authenticated
  const isAuthenticated = !!token;

  return(
    <Authcontext.Provider value={{token,login,logout,isAuthenticated}}>
      {Children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => useContext(Authcontext);