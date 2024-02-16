import { getAllUsersAction, authAction, logoutAction } from "./usersSlice";
import { AppDispatch } from "./store";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const signUp =
  (email: string, password: string, setIsModalOpen: (a: boolean) => void) =>
  async (dispatch: AppDispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch(authAction({ id: user.uid, email: user.email }));
          setIsModalOpen(false);
          await addDoc(collection(db, "users"), {
            email: user.email,
            id: user.uid,
            createdAt: Date.now(),
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

export const signIn =
  (email: string, password: string, setIsModalOpen: (a: boolean) => void) =>
  async (dispatch: AppDispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch(authAction({ id: user.uid, email: user.email }));
          setIsModalOpen(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

export const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(logoutAction());
};

export const getAllUsers = () => async (dispatch: AppDispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users: any = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    dispatch(getAllUsersAction(users));
  } catch (error: any) {
    console.log(error.message);
  }
};
