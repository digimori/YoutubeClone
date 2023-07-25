import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; /* So in theory, we can env.js this, right? Secret keys? */

const options = {
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '20e0acb981msh280ffa3e9b90000p16a3c2jsndc30a8f07283',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

/* Below allows the use of data as a prop across components after it has fetched the data from the url/API */

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}