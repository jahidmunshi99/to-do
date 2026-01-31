import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

const SignInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

const logOut = async (auth) => {
  try {
    const signout = await signOut(auth);
    return signout;
  } catch (e) {
    console.log(e);
  }
};

export { logOut, SignInWithEmail, singInWithGoogle };
