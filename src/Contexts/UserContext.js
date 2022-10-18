import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    //manage user, to check currently signed-in user
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log('current user check:', currentUser);
            setUser(currentUser);
        })
    }, [])

    //to use another palace as useContext
    const authInfo = { user, createUser, signIn, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;