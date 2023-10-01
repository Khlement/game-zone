import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '962bcfae644b4b0ba48036a7c08d91cf'
  }
})