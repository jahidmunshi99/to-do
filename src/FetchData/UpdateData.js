import axios from "axios";
const updatePost = async (taskId, updateTask) => {
  const res = await axios.put(
    `https://phdb-api.onrender.com/posts/${taskId}`,
    updateTask,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res;
};
export { updatePost };
