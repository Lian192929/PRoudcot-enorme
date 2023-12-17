/* global: Discord */

/*
    bot.on('message', callback) 
    bot.sendMessage({ 
      to: channelID,
      message: string
    })
*/

function main(bot) {
    bot.on('ready', () => {
      log(`Logged in as ${bot.username} - ${bot.id}\n`);
    });
    bot.on('message', (username, userID, channelID, message, event) => {
      log({ username, userID, channelID, message, });
  
      const matches = message.match(/(ã½|ãƒ|po)/i);
      if (!matches) return;
  
      const po = matches[1];
      bot.sendMessage({
        to: channelID,
        message: `${po}ã ã‚ˆ` });
  
    });
  }
  
  
  // DOM
  const connectElement = document.getElementById('connect');
  const tokenInput = document.getElementById('token');
  const logElement = document.getElementById('log');
  const clientIdInput = document.getElementById('client');
  const msgElement = document.getElementById('msg');
  
  connectElement.addEventListener('click', () => {
    const bot = new Discord.Client({
      token: tokenInput.value,
      autorun: true });
  
    main(bot);
  });
  
  clientIdInput.addEventListener('input', () => {
    const clientId = clientIdInput.value;
    const url = `https://discordapp.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=0`;
    msgElement.innerHTML = clientId ? `invita tu bot <a target="_blank" href="${url}"> AQUI</a>!<br><small>(${url})</small>` : 'fill in the client id!';
  });
  
  // others
  function log(...x) {
    const str = x.map(v => stringify(v)).
    join(' ');
    logElement.innerHTML = `${str}\n\n${logElement.innerHTML}`;
  }
  function stringify(x) {
    if (typeof x === 'object') {
      return JSON.stringify(x, null, '   ');
    }
    return x + '';
  }
  
  function main(bot) {
    bot.on('ready', () => {
      log(`Logged in as ${bot.username} - ${bot.id}\n`);
    });
  
    const statusForm = document.getElementById('status-form');
    statusForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const statusText = document.getElementById('status-text').value;
      if (statusText.trim() !== '') {
        bot.setPresence({ game: { name: statusText } });
        log(`Estado del bot actualizado a: ${statusText}`);
      }
    });
  }
  
  
  
  // Guardar el token en una cookie
  document.cookie = `token=${token}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
  
  // Leer el token desde la cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const savedToken = getCookie('token');