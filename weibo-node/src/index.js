const { join } = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const { getModules } = require('./utils');
const { authenticateToken } = require('./midwares/auth');

const app = express();
app.use(express.json());
app.use(cors());

// all routes
const routes = getModules(
  join(__dirname, './routes')
);

routes.forEach(({ path, module }) => {
  const router = express.Router();

  ['get', 'post'].forEach(method => {
    if (!module[method]) return

    let midwares = module.midwares ?? [];

    if (module.auth) {
      midwares = [authenticateToken ,...midwares]
    }

    router[method](path, midwares, (req, res, next) => {
      try {
        module[method](
          req,
          res,
          next,
          { path, module }
        )
      }
      catch (error) {
        next(error)
      }
    });
  });

  app.use('/api/', router);
})

app.use('/static', express.static(join(__dirname, '../public'))); // 暴露静态文件


const server = http.createServer(app);
server.listen(3000);