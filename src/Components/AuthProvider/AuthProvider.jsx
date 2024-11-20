import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const signInWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }

    const createNewUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logout,
        userLogin,
        loading,
        signInWithGoogle,
    }

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;