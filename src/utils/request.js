// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://v1.hitokoto.cn',
        timeout: 10000
    })

    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error)
        return Promise.error(error)
    })

    instance.interceptors.response.use(response => {
        // console.log(response)
        return response.data
    }, error => {
        return Promise.reject(error)
    })

    return instance(config);
}
export default request