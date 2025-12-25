import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";

const createPost = async (newTask) => {
  const docRef = await addDoc(collection(db, "projects"), {
    ...newTask,
    created_at: serverTimestamp(),
  });

  return docRef.id;
};

export { createPost };
