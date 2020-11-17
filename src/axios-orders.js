import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://westheimkontakt.firebaseio.com/'

});

export default instance;