import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase.config.js";

const updatePost = async (docId, updatedData) => {
  if (!docId) throw new Error("Invalid Document ID");

  const taskRef = doc(db, "projects", docId);
  await updateDoc(taskRef, {
    ...updatedData,
    updatedAt: serverTimestamp(),
  });
};

const updateOrderStatus = async (docId, deliveryStatus) => {
  if (!docId) throw new Error("Invalid Document ID");
  const taskRef = doc(db, "projects", docId);
  await updateDoc(taskRef, {
    order_status: deliveryStatus,
    updatedAt: serverTimestamp(),
  });
};
export { updateOrderStatus, updatePost };
