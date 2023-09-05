import ajax from './'

export const addWeibo = (weibo) => ajax({
  url: 'weibo/add',
  method: 'post',
  data: weibo,
  withToken: true
})

export const getWeibo = () => ajax({
  url: 'weibo',
  method: 'get',
  withToken: true
})