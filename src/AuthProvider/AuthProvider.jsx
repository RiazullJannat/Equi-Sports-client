import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase._init_";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    // register user
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Enter via google
    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // Update user
    const updateUser = (updatedDoc) => {
        return updateProfile(auth.currentUser, updatedDoc)
    }
    // Current User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    // global data
    const globalValue = {
        loading,
        user,
        setLoading,
        setUser,
        signUp,
        updateUser,
        googleSingIn    
    }
    return (
        <AuthContext.Provider value={globalValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;