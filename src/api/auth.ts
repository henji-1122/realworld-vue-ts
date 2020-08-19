// 用户认证相关接口模块
import request from './request'

// 接口形式 定义请求参数数据类型
// export后别处也可以导入使用
export interface User {
  user: {
    username: string
    email: string
    password: string
  }
}

// 接口形式 定义返回数据类型
export interface RegisterData {
  user: {
    email: string
    token: string
    username: string
    bio: string
    image: string
  }
}

// 用户注册
export const register = async (data: User): Promise<RegisterData> => { // async返回的是Promise
  const res = await request({
    method: 'POST',
    url: '/users',
    data
  })
  console.log(res.data)
  return res.data
}

// register({
//   user: { // 有了参数类型，就可以有错误提示
//     username: '',
//     email: '',
//     password: ''
//   }
// }).then(data => {
//   data.user.username  // 有了返回值类型，就可以.出后台返回的字段
// })
