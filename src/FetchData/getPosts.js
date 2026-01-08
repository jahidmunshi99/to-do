// import axios from "axios";
// const GetPosts = async () => {
//   try {
//     const request = await axios.get("https://phdb-api.onrender.com/posts");
//     return request.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { GetPosts };

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase.config.js";

const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));

    if (querySnapshot.empty) {
      console.log("No documents found!");
      return [];
    }

    const result = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return result;
  } catch (error) {
    console.error("Firestore error:", error);
    return [];
  }
};

export { getPosts };
