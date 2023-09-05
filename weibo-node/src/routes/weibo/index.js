const { getWeibo } = require('../../mysql/weibo.js')

const readable = [
  'publish_time',
  'article',
  'imgs',
  'device',
  'share_num',
  'like_num',
  'star_num',
  'nickname',
  'avatar',
  'username'
]

module.exports = {
  auth: true,
  async get(req, res) {
    try {
      const [weibo_list] = await getWeibo();

      const filtered_list = weibo_list.map(item => readable.reduce((pre, key) => {
        if(item[key]) {
          pre[key] = item[key]
        }
        return pre
      }, ({})))

      res.send({
        status: 0,
        data: {
          weibo_list: filtered_list
        }
      })
    } catch (e) {
      res.send({
        status: 2,
        msg: e.message
      })
    }
  }
}