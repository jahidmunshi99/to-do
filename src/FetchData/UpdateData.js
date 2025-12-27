import axios from "axios";
const updatePost = async (newTask) => {
  const res = await axios.post("https://phdb-api.onrender.com/posts", newTask, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};
export { updatePost };
