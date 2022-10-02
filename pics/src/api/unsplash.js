import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Pt3gjyPGWbudI58wkndikA13rpKGp00NptWbSj_mETY'
  }
})