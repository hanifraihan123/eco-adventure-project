import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createNewUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        return signOut(auth);
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser);})
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
    }

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;