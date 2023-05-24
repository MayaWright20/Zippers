import { createContext, useState } from 'react';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

export default function AuthContextProvider({ children }){
    const [ authToken, setAuthToken ] = useState();

    function authenticate( token ){
        console.log("setAuthToken 1", token)
        setAuthToken( token );
        console.log("setAuthToken", token)
    }

    function logout(){
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}