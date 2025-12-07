import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/posts/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8000/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getPosts, getUsers };
