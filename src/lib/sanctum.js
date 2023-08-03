import axios from './axios'
import Cookies from 'js-cookie'

const setCsrfCookie = async () => {
    const { data } = await axios.get('/sanctum/csrf-cookie')
    // Cookies.set('XSRF-TOKEN', data.csrf_token);
    // // console.log("data.csrf_token", data.csrf_token)
    // const csrfCookie = Cookies.get('XSRF-TOKEN')
    return csrfCookie
}

export default setCsrfCookie
