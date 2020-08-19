import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api' // 接口的基础路径
})

// 请求拦截器

// 响应拦截器

export default request
