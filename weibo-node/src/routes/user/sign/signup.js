const { createUser } = require('../../../mysql/user.js');
const zxcvbn = require('zxcvbn');
const { hashPassword } = require('../../../utils/password.js')

module.exports = {
  async post(req, res, next) {
    try {
      const { username, password } = req.body;
      const passStrong = typeof password === 'string' && zxcvbn(password);

      if (passStrong.guesses < 10000) {
        return res.send({
          status: 1,
          msg: '密码强度过低，请重新设置密码'
        })
      }
      const newUser = {
        username,
        password: hashPassword(password),
        create_time: new Date()
      }

      const mysql_res = await createUser(newUser)

      if (mysql_res[0].affectedRows === 1) {
        res.send({
          status: 0,
          msg: '注册成功'
        });
      } 
      else {
        res.send({
          status: 2,
          msg: '注册失败，请稍后再试'
        });
      }
    } catch (e) { 
      if (/^ER_DUP_ENTRY/.test(e.message)) {
        return res.send({
          status: 2,
          msg: '该用户已经被注册过了'
        });
      }
      res.send({
        status: 2,
        msg: e.message
      })
    }
  }
}