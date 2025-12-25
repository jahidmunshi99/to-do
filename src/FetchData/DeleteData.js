import { deleteDoc, doc } from "firebase/firestore";
import db from "../Firebase/firebase.config";

const deletePost = async (taskId) => {
  try {
    const docRef = doc(db, "projects", taskId);
    await deleteDoc(docRef);
    console.log("Document deleted:", taskId);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

export { deletePost };
