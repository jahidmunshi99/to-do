import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../Firebase/firebase.config";

const createPost = async (task) => {
  const docRef = await addDoc(collection(db, "projects"), {
    ...task,
    created_at: serverTimestamp(),
  });

  return docRef.id;
};

export { createPost };
