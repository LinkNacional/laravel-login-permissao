import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 90000
})
export { axiosInstance }
