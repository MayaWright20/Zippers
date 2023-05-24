import { createContext, useState } from 'react';

export const AuthOTPContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

export default function AuthOTPContextProvider({ children }){
    const [ authToken, setAuthToken ] = useState();

    function authenticate( token ){
        setAuthToken( token );
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

    return <AuthOTPContext.Provider value={value}>{children}</AuthOTPContext.Provider>;
}