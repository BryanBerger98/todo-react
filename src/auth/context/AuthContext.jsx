import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase-config';

const AuthContext = React.createContext(null);

export { AuthContext };

const AuthContextProvider = props => {

    const [currentUser, setCurrentUser] = useState(null);

    onAuthStateChanged(auth, user => {
        setCurrentUser(user);
    }, error => {
        console.error(error);
    });

    const signupUserWithEmailAndPassword = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            return user;
        } catch (error) {
            throw error;
        }
    }

    const signinUserWithEmailAndPassword = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            return user;
        } catch (error) {
            throw error;
        }
    }

    return(
        <AuthContext.Provider value={{
            currentUser,
            signupUserWithEmailAndPassword,
            signinUserWithEmailAndPassword
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;