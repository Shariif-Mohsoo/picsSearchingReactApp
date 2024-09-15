// // https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY
import axios from "axios";
const searchImages = async (term) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY_FOR_UNPLASH;
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
    params: {
      query: term,
      per_page: 12,
    },
  });
  // console.log(response);
  return response?.data?.results;
};
export default searchImages;
