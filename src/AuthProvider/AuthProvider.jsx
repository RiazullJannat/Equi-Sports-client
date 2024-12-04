import { createContext, useState } from "react";
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const globalValue = {
        loading,
        currentUser,
        setLoading,
        setCurrentUser
    }

    return (
        <AuthContext.Provider value={globalValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node.isRequired
  };

export default AuthProvider;