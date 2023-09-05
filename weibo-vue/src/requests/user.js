import ajax from './index.js'

export const signup = (user) => ajax({
  url: 'user/sign/signup',
  data: user,
  method: 'post'
})

export const signin = (user) => ajax({
  url: 'user/sign/signin',
  data: user,
  method: 'post'
})

export const info = () => ajax({
  url: 'user/info',
  method: 'get',
  withToken: true
})

export const update = (info) => ajax({
  url: 'user/info/update',
  method: 'post',
  data: info,
  withToken: true
})