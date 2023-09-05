const multer = require('multer');
const { getHashByBuffer } = require('../../utils/hash')
const path = require('path');
const fs = require('fs')

const upload = multer();
module.exports = {
  auth: true,
  midwares: [upload.single('file')],
  async post(req, res) {
    try {
      const file = req.file;

      if(!file) {
        return res.send({
          status: 1,
          msg: '没有选中图片'
        });
      }

      const fileName = getHashByBuffer(file.buffer) + file.originalname;
      const filePath = path.join(__dirname, '../../../public/' + fileName);

      fs.writeFile(filePath, file.buffer, (err) => {
        if (err) {
          return res.send({
            status: 2,
            msg: err.message
          })
        }
        else {
          return res.send({
            status: 0,
            msg: '上传成功',
            data: {
              fileName,
              path: 'http://localhost:3000/static/' + fileName
            }
          });
        }
      })
    } catch (e) {
      res.send({
        status: 2,
        msg: e.message
      });
    }
  }
}