const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true });

function generateUrl(query) {
    var baseURL = 'https://www.google.com/search?';
    var queryParam = 'q=' + encodeURIComponent(query);
    var url = baseURL + queryParam;
    return url
}

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text) {
        if (msg.text === '/start') {
            await bot.sendMessage(chatId, 'Hello, send me keyword, then I will send you google search query depending your keyword.')
        }
        else {
            await bot.sendMessage(chatId, generateUrl(msg.text))
        }
    }
    else {
        await bot.sendMessage(chatId, "send me keyword, then I will send you google search query depending your keyword.")
    }

}); 