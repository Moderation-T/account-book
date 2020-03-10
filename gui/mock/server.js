const restify = require('restify');
const partition = require('./modules/index');

const server = restify.createServer();

// 获取 query 数据
server.use(restify.plugins.queryParser());
// 获取 request body 数据
server.use(restify.plugins.bodyParser());

server.listen(8889, () => {
  console.log('🎉 Mock Server is Started at 8889!!!');
});
partition(server);


