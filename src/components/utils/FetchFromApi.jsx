import axios from "axios";

const URL_YT = 'https://youtube-v31.p.rapidapi.com/search';

const options = {


  params: {
    
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${URL_YT}/${url}`, options);

    return data;
}
