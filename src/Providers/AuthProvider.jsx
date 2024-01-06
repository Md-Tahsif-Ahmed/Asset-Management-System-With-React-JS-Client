// AuthProvider.jsx
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged // Add this import statement
} from 'firebase/auth';
import useAxiosPublic from '../Hook/useAxiosPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (name, email, password, dob, comname, pack, logo) => {
    console.log(name, email, password, dob, comname, pack, logo);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User created successfully:', userCredential.user);
        setLoading(false);
        return userCredential;
      })
      .catch((createError) => {
        console.error('Error creating user:', createError);
        setError(createError.message);
        setLoading(false);
        throw createError;
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((signInError) => {
        console.error('Error signing in:', signInError);
        setError(signInError.message);
        setLoading(false);
        throw signInError;
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .catch((googleSignInError) => {
        console.error('Error signing in with Google:', googleSignInError);
        setError(googleSignInError.message);
        setLoading(false);
        throw googleSignInError;
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .catch((signOutError) => {
        console.error('Error signing out:', signOutError);
        setError(signOutError.message);
        setLoading(false);
        throw signOutError;
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log('current value of the user', currentUser);
      setUser(currentUser);
    //   jwt created client side
    if(currentUser){
        // get token and store client
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt', userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
            setLoading(false);
          }
          else {
            localStorage.removeItem('access-token')
            setLoading(false);
          }
        })
      }
      
      setError(null);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
