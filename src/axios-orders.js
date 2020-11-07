import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://angularjsfirebase-ad338.firebaseio.com/'
});

export default instance;