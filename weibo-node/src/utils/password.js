const crypto = require('crypto');

const salt = '7b872b373c76e78b572c8bc34c400bed'
exports.hashPassword = function (password) {
  const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hashedPassword;
}

exports.verifyPassword = function (passwordAttempt, storedHashedPassword) {
    const hashedAttemptedPassword = crypto.pbkdf2Sync(passwordAttempt, salt ,1000 ,64 ,'sha512').toString('hex');
    return (hashedAttemptedPassword === storedHashedPassword);
}