import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "projects"));

  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data();

    return {
      id: docSnap.id, // Firestore ID
      ...data,
      created_at: data.created_at?.toDate
        ? data.created_at.toDate().toISOString().slice(0, 10) // YYYY-MM-DD
        : "",
    };
  });
};

export { getPosts };
