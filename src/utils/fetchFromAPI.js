import axios from "axios";

const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions'; /* So in theory, we can env.js this, right? Secret keys? */

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

/* Below allows the use of data as a prop across components after it has fetched the data from the url/API */

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}