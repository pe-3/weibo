const { getUser } = require('../../../mysql/user.js');
const { verifyPassword } = require('../../../utils/password.js')
const { createToken } = require('../../../midwares/auth.js')

module.exports = {
  async post(req, res) {
    try {
      const { username, password } = req.body;
      const [mysql_res] = await getUser.byAccount(username);
      if (mysql_res && mysql_res[0]) {
        const { password: hash, id } = mysql_res[0]
        if (verifyPassword(password, hash)) {
          res.send({
            status: 0,
            msg: '登陆成功',
            data: {
              token: createToken({ username, id })
            }
          });
        }
        else {
          res.send({
            status: 1,
            msg: '登陆失败，用户名或者密码错误'
          });
        }
      }
      else {
        res.send({
          status: 1,
          msg: '登陆失败，用户名或者密码错误'
        });
      }
    }
    catch (e) {
      res.send({
        status: 2,
        msg: e.message
      })
    }
  }
}