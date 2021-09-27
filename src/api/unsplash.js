import axios from 'axios';
const API_KEY = "yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo";
// const CLIEN_ID = process.env.REACT_APP_CLIENT_ID;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${API_KEY}`
    }
});

