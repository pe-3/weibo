const type_user = {
  id: 0,
  create_time: '2022-13-14',
  username: 'peter',
  password: 'wqweqwe',
  nickname: '哦嗨哟',
  avatar: 'http://localhost:3000/3.jpg',
  intro: '这是我的自我介绍',
  site: '北京市',
  backImage: 'http://back.jpg',
  fans: 123,
  follows: 1231,
  is_del: 0
}

const pool = require('./pool.js')

/**
 *  添加一个用户
 */
const createUser = (user) => pool('insert into users set ?', user)

/**
 *  软删除一个用户
 */
const delUser = (account) => pool('update users set ? where username = ? and is_del = 0', [{ is_del: 1 }, account])

/**
 *  获取一个用户的信息
 */
const getUserById = (id) => pool('select * from users where id = ? and is_del = 0', id)
const getUserByName = (nickname) => pool('select * from users where nickname = ? and is_del = 0', nickname)
const getUserByAccount = (account) => pool('select * from users where username = ? and is_del = 0', account)

/**
 *  更新一个用户信息
 */
const updateUser = (user, id) => pool('update users set ? where id = ? and is_del = 0', [user, id])

/**
 * 恢复一个用户
 */
const recoveryUser = (uname) => pool('update users set ? where username = ? and is_del = 1', [{ is_del: 0 }, uname])

module.exports = {
  createUser,
  delUser,
  updateUser,
  getUser: {
    byId: getUserById,
    byAccount: getUserByAccount,
    byNick: getUserByName
  },
  recoveryUser
};