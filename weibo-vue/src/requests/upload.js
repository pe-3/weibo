import ajax from './'

export const upload = (data) => ajax({
  url: 'upload',
  method: 'post',
  data,
  withToken: true
})