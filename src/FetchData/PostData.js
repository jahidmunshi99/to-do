// import axios from "axios";
// const createPost = async (newTask) => {
//   const res = await axios.post("https://phdb-api.onrender.com/posts", newTask, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return res;
// };

// export { createPost };
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase.config.js";

const createPost = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "projects"), item);
    return docRef;
  } catch (error) {
    console.log(error);
  }
};

export { createPost };
