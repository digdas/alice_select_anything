const Alice = require('yandex-dialogs-sdk');
const ngrok = require('ngrok');

const startNgrok = async () => {
  const url = await ngrok.connect(8087);
  console.log(url);
};

const alice = new Alice();

alice.any(ctx => {
  console.log(JSON.stringify(ctx));
  ctx.reply('хватит заниматься ерундой');
});

alice.command('хочу кофе', ctx => {
  ctx.reply('хоти дальше');
});

alice.listen('/', 8087);