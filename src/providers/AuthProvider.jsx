
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProviders = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password )
    }
    // signin google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
  
    // github
    const signIngithub = () => {
        setLoading(true)
       return signInWithPopup(auth, githubProviders)
    }

    // logOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    // update profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })
          
    }








    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
           
            console.log('user in the auth state change', currentUser);
            setUser(currentUser)
            setLoading(false);
           
        });
        return () => {
            unSubscribe()
        }
    },[])
  















    const authInfo = {
        user,
        creatUser,
        signIn,
        signInWithGoogle,
       
        signIngithub,
        logOut,
        loading,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;