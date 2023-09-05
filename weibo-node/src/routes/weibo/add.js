const { extractDeviceInfo } = require('../../utils/index.js')
const { createWeibo } = require('../../mysql/weibo')

module.exports = {
  auth: true,
  async post(req, res, next) {
    try {
      let weibo = req.body;

      // 作者 id
      const { id } = req.user;
      weibo.author_id = id;

      // 发布设备信息
      const userAgent = req.headers['user-agent'];
      const { os } = extractDeviceInfo(userAgent);
      
      weibo = {
        ...weibo,
        ...{ 
          device: String(os),
          author_id: id
        }
      }

      const [mysql_res] = await createWeibo(weibo);
      if(mysql_res && mysql_res.affectedRows === 1) {
        return res.send({
          status: 0,
          msg: '发布成功'
        })
      }
      else {
        res.send({
          status: 0,
          msg: '发布失败'
        });
      }
    } catch (e) {
      res.send({
        status: 2,
        msg: e.message
      })
    }
  }
}