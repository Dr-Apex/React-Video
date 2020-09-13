import axios from 'axios';

const KEY = 'AIzaSyD5CwKojrw4uwWMS_tol-vLvOvFYTwQCUg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
