import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // new user create using firebase formula
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // new user signIn using firebase formula
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // new user singOut using firebase formula
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, createUser, signIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;