const Router = require('koa-router');
const messageController = require('./controller/message-controller')


const router = new Router();

router.get('/messages', messageController.getAll)
router.post('/messages', messageController.create)

module.exports = router;
