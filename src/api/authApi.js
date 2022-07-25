
import axios from 'axios'

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: 'AIzaSyAWhLwlY4mN9J5acgb0l5yYf1tWfIEICqQ'
  }
})

export default authApi

