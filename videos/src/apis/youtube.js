import axios from 'axios'

const KEY = 'AIzaSyBxUkQ5GSTsdE_Htza4tQWmLbBuyoD8Q4k'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})