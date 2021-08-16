import axios from "axios";

export const fetchPrices = async () => {
  const response = await axios.get("http://localhost:5000/prices", {
    validateStatus: () => true,
  });
  if (response.status !== 200) {
    //Error handling
  }
  return response.data.data;
};
