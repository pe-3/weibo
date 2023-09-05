const fs = require('fs');
const path = require('path');

exports.getModules = function(dirPath) {
    function Loop(dirPath) {
        const files = fs.readdirSync(dirPath);
        const modules = [];
        files.forEach((file) => {
            const filePath = path.join(dirPath, file);
            if (fs.statSync(filePath).isDirectory()) {
                modules.push(...Loop(filePath, ''))
            } else if (path.extname(file) === '.js') {
                modules.push({
                    path: filePath,
                    module: require(filePath)
                });
            }
        });
        return modules;
    }
    return Loop(dirPath).map(m => ({
        path: m.path.replace(dirPath, '').replace('.js', '').replace('index', ''),
        module: m.module
    }));
}


exports.extractDeviceInfo = function (userAgent) {
    // 假设 User-Agent 的格式为：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3
    const regex = /\(([^)]+)\)/; // 使用正则表达式提取括号内的内容
    const matches = regex.exec(userAgent);
    
    if (matches && matches.length > 1) {
      const deviceInfo = matches[1];
      
      // 进一步解析设备信息
      const deviceParts = deviceInfo.split(';').map(part => part.trim());
      const [os, platform, browser] = deviceParts;
      
      return {
        os,
        platform,
        browser
      };
    }
    
    return null;
}
  