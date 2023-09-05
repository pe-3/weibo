const { getUser } = require('../../../mysql/user.js')

const readable = [
  'username',
  'nickname',
  'create_time',
  'avatar',
  'intro',
  'site',
  'backImage',
  'fans',
  'follows'
]

module.exports = {
  auth: true,
  async get(req, res) {
    try {
      const { id } = req.user;
      const [users] = await getUser.byId(id);
      if (!users.length) {
        return res.send({
          status: 1,
          msg: '登陆信息出错，请重新登陆'
        });
      }

      const user = users[0];
      const readableUser = readable.reduce((pre, key) => {
        Object.assign(pre, { [key]: user[key] })
        return pre;
      }, ({}));

      return res.send({
        status: 0,
        msg: '欢迎登陆',
        data: {
          user: readableUser
        }
      });
    } catch (error) {
      res.send({
        status: 2,
        msg: error.message
      })
    }
  }
}