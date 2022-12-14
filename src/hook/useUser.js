import UserContextProvider from "../context/UserContext";
import { useContext, useState } from "react";
import loginService from "../services/login";

export default function useUser() {
  const { jwt, setJwt } = useContext(UserContextProvider);
  const [state, setState] = useState({ loading: false, error: false });

  const login = ({ username, password }) => {
    setState({ loading: true, error: false });
    loginService({ username, password })
      .then((jwt) => {
        window.sessionStorage.setItem("jwt", jwt);
        setState({ loading: false, error: false });
        setJwt(jwt);
      })
      .catch((err) => {
        window.sessionStorage.removeItem("jwt");
        setState({ loading: false, error: true });
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
  };
}
