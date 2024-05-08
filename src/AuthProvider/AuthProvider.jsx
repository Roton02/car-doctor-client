import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const signUp = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const SignUpInGmail = () =>{
        setLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        signOut(auth)
        .then()
        .catch(Error=>{
            console.log(Error);
        })
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
         const userInfo = {email: currentUser?.email || user?.email}
         console.log("currentUser", currentUser);
         setUser(currentUser)
         setLoading(false)
         if(currentUser){
            axios.post('https://cars-doctor-server-rotons-projects.vercel.app/jwt', userInfo , {withCredentials:true})
            .then(res=>{
                console.log(res.data)
            })
         }
         else{
            axios.post('https://cars-doctor-server-rotons-projects.vercel.app/loggout', userInfo , {withCredentials:true})
            .then(res => {
                console.log(res.data);
            })
         }
        })
        return ()=>{
         unsubscribe()
        }
     },[user?.email])
    const authInfo = {
        user, setUser ,loading, setLoading,signUp,signIn,SignUpInGmail,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;