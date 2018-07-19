const Alice = require('yandex-dialogs-sdk');
const ngrok = require('ngrok');

const startNgrok = async () => {
  const url = await ngrok.connect(8087);
  console.log(url);
};

const alice = new Alice();

alice.any(ctx => {
  ctx.reply(`Стас говорит лучше сядь на ${ctx.req.request.original_utterance}`);
});

alice.listen('/', 8087);