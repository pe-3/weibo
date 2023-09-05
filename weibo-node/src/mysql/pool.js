const pool = require('mysql').createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'weibo',
  connectionLimit: 10
});

const query = pool.query.bind(pool)

module.exports = function (sql, arg) {
  return new Promise((resolve, reject) => {
    query(sql, arg, (err, data, fileds) => {
      if (err) return reject(err)
      return resolve([data, fileds])
    })
  })
}

