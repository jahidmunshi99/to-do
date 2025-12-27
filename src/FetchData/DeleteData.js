import axios from "axios";
const deletePost = async (postId) => {
  const res = await axios.delete(
    `https://phdb-api.onrender.com/posts/${postId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res;
};

export { deletePost };
