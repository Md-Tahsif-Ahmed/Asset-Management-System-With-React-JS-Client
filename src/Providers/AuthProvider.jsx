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

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const createUser = (name, email, password, dob, comname, pack, logo) => {
    console.log(name, email, password, dob, comname, pack, logo);

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User created successfully:', userCredential.user);
        return userCredential;
      })
      .catch((createError) => {
        console.error('Error creating user:', createError);
        setError(createError.message);
        throw createError;
      });
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .catch((signInError) => {
        console.error('Error signing in:', signInError);
        setError(signInError.message);
        throw signInError;
      });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
      .catch((googleSignInError) => {
        console.error('Error signing in with Google:', googleSignInError);
        setError(googleSignInError.message);
        throw googleSignInError;
      });
  };

  const logOut = () => {
    return signOut(auth)
      .catch((signOutError) => {
        console.error('Error signing out:', signOutError);
        setError(signOutError.message);
        throw signOutError;
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log('current value of the user', currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signInUser, signInWithGoogle, logOut };

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
