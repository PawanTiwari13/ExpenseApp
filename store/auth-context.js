import {createContext, useState} from "react";
export const AuthContext=createContext({
    token:'',
    isAuthenticated:false,
    authenticate:()=>{

    },
});
export function AuthContextProvider({children}){
  const [authToken,setAuthToken] =useState();
  function authenticate(token){
      setAuthToken(token);
  }
  function   logout(){
      setAuthToken(null);
  }
  const value={
      token:authToken,

      isAuthenticated:!!authToken,
      authenticate:authenticate,
      logout:logout,

  }
  console.log(authToken);
    return <AuthContext.Provider value={value}>
        {children}

    </AuthContext.Provider>
}
