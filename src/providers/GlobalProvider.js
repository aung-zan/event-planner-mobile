import { getToken } from "../helper/Storage";
import React from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [authCheck, setAuthCheck] = React.useState(false);

  const value = { authenticated, setAuthenticated, authCheck };

  const checkAuth = async () => {
    const result = await getToken();

    if (result !== null) {
      setAuthenticated(true);
    }

    setAuthCheck(true);
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return React.useContext(GlobalContext);
};
