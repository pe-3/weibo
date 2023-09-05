const pool = require('./pool.js');

exports.createWeibo = (weiboItem) => pool('insert into weibo set ?', weiboItem);
exports.delWeibo = (weiboId) => pool('update weibo set ? where id = ? and is_del = 0', [{ is_del: 1 }, weiboId]);
exports.recoveryWeibo = (weiboId) => pool('update weibo set ? where id = ? and is_del = 1', [{ is_del: 0 }, weiboId]);
exports.updateWeibo = (updateWeibo, weiboId) => pool('update weibo set ? where id = ? and is_del = 0', [updateWeibo, weiboId]);
exports.getWeibo = () => pool(`
  SELECT * FROM weibo w LEFT JOIN weibo.users user ON w.author_id = user.id
`)