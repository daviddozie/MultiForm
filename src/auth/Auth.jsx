
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
            } else {
                localStorage.removeItem('user');
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);

        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
    };

    const signUp = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
    };

    const logOut = async () => {
        await signOut(auth);
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signUp, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};
