const { updateUser } = require('../../../mysql/user.js')

const writeable = [
  'nickname',
  'avatar',
  'intro',
  'site',
  'backImage',
];

module.exports = {
  auth: true,
  async post(req, res) {
    try {
      const { id } = req.user;
      const info = req.body;
      const filterInfo = writeable.reduce((pre, key) => {
        if (info[key]) {
          pre[key] = info[key]
        }
        return pre;
      }, ({}))
      const [mysql_res] = await updateUser(filterInfo, id);
      console.log(mysql_res)
      if (mysql_res && mysql_res.affectedRows === 1) {
        return res.send({
          status: 0,
          msg: '更新成功'
        });
      }
      else {
        return res.send({
          statu: 1,
          msg: '更新失败，请稍后再试'
        });
      }

    } catch (error) {
      res.send({
        status: 2,
        msg: error.message
      })
    }
  }
}