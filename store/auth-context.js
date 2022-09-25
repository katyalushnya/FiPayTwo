import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
    navigateScreen:()=>{},
    nav: false,
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    const [navi, setNavi]=useState(false);

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', authToken);
    }

    function logout() {
        setAuthToken(null);
        setNavi(false);
        AsyncStorage.removeItem('token');
    }

    function navigateScreen(type){
        setNavi(type);
        AsyncStorage.setItem('token', authToken);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
        navigateScreen: navigateScreen,
        nav: navi,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
