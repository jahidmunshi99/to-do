import axios from "axios";
const getUsers = async () => {
  try {
    const res = await axios.get("https://phdb-api.onrender.com/users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
