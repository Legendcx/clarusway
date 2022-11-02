import { useContext } from "react";
import { Children, createContext } from "react";
import { useState } from "react";

//! 1-) Creating Login Context
export const LoginContext = createContext();

const LoginProvider = () => {


  const {user, setUser} = useState({email: "", password: ""});

  const values = {user, setUser};

return (
  <LoginContext.Provider value={values}>{Children}</LoginContext.Provider>
);
};

export const useLoginContext = ()=>{
  return useContext(LoginContext);
};

export default LoginProvider;