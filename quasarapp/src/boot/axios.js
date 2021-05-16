import axios from 'axios'
// prod

var url = window.location.href
var arr = url.split('/')
var result = arr[0] + '//' + arr[2]

const axiosInstance = axios.create({
  baseURL: result + '/myapi',
  timeout: 90000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})
export { axiosInstance }
