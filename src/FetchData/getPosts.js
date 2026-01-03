import axios from "axios";
const GetPosts = async () => {
  try {
    const request = await axios.get("https://phdb-api.onrender.com/posts");
    return request.data;
  } catch (error) {
    console.log(error);
  }
};

export { GetPosts };
