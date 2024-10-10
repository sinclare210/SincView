import axios from "axios";


const URL_YT = 'https://youtube-v31.p.rapidapi.com';

const options = {


  params: {
    
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${URL_YT}/${url}`, options);

    return data;
}
