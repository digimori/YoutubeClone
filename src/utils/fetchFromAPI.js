import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; /* So in theory, we can env.js this, right? Secret keys? */

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

/* Below allows the use of data as a prop across components after it has fetched the data from the url/API */

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}