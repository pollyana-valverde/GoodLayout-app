import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [tokenGL, setTokenGl_] = useState(localStorage.getItem("tokenGL"));
    const [loginTime, setLoginTime] = useState(() => {
        const storedLoginTime = localStorage.getItem('loginTime');
        return storedLoginTime ? new Date(storedLoginTime) : null;
    });

    const setToken = (newToken) => {
        setTokenGl_(newToken);
        if (newToken) {
            const currentTime = new Date();
            setLoginTime(currentTime);
            localStorage.setItem('loginTime', currentTime);
        }
    };

    useEffect(() => {
        if (tokenGL) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + tokenGL;
            localStorage.setItem('tokenGL', tokenGL);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('tokenGL');
            localStorage.removeItem('loginTime');
            setLoginTime(null);
        }
    }, [tokenGL]);

    const contextValue = useMemo(
        () => ({
            tokenGL,
            setToken,
            loginTime, 
        }),
        [tokenGL, loginTime]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
