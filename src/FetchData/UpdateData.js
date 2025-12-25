import db, { doc, updateDoc } from "../Firebase/firebase.config";
const updatePost = async (task) => {
  const { id, ...rest } = task;
  const updateRef = doc(db, "projects", id);
  try {
    await updateDoc(updateRef, rest);
  } catch (error) {
    console.log(error);
  }
};

export { updatePost };
