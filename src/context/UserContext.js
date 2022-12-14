import React from "react";
import { useState, useEffect } from "react";
import getAllFavs from "../services/getFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if (!jwt) return setFavs([]);
    getAllFavs({ jwt })
      .then(setFavs)
      .catch((err) => {
        console.log(err);
      });
  }, [jwt]);

  return (
    <Context.Provider value={{ jwt, favs, setFavs, setJwt }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
