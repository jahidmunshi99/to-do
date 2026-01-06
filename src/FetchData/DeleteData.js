// import axios from "axios";
// const deletePost = async (postId) => {
//   const res = await axios.delete(
//     `https://phdb-api.onrender.com/posts/${postId}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return res;
// };
// export { deletePost };
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase.config.js";

const deletePost = async (postId) => {
  try {
    const docRef = await deleteDoc(doc(db, "projects", postId));
    return docRef;
  } catch (error) {
    console.log(error);
  }
};
export { deletePost };
