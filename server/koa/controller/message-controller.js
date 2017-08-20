const Message = require('../model/message-model')

const getAll = async (ctx, next) => {
  ctx.body = await Message.find();
}

const create = async (ctx, next) => {
  const newMessage = new Message(ctx.request.body);
  await newMessage.save(ctx.request.body);
  ctx.status = 201;
  ctx.body = 'ok';
  // console.log(ctx.request.body);
}

module.exports = {getAll, create};
