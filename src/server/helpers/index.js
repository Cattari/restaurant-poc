const networkInterfaces = require('./networkInterfaces')

module.exports = {
  getNetWorkInterfaces: networkInterfaces.getNetWorkInterfaces,
  getLocalIpAddress: networkInterfaces.getLocalIpAddress,
};
