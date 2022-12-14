import UserContextProvider from "../context/UserContext";
import { useContext, useState } from "react";
import loginService from "../services/login";
import addFavService from "../services/addFav";

export default function useUser() {
  const { jwt, setJwt, setFavs, favs } = useContext(UserContextProvider);
  const [state, setState] = useState({ loading: false, error: false });

  const login = ({ username, password }) => {
    setState({ loading: true, error: false });
    loginService({ username, password })
      .then((jwt) => {
        console.log(jwt);
        if (!jwt) {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
        } else {
          window.sessionStorage.setItem("jwt", jwt);
          setState({ loading: false, error: false });
          setJwt(jwt);
        }
      })
      .catch((err) => {
        console.log(err);
        window.sessionStorage.removeItem("jwt");
        setState({ loading: false, error: true });
      });
  };

  const addFav = ({ id }) => {
    addFavService({ id, jwt })
      .then((favs) => setFavs(favs))
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    window.sessionStorage.removeItem("jwt");
    setJwt(null);
  };

  return {
    login,
    logout,
    isLoginLoading: state.loading,
    isLoginHasError: state.error,
    isLogged: Boolean(jwt),
    addFav,
    favs,
  };
}
