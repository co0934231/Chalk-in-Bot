// console.log("hello");
//Christian Oliver

const chalk = require('chalk');

console.log(chalk.magentaBright('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = "/"

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else{
    
  
  let args = msg.content.substring(prefix.length).split(" ");
  console.log(args)
  switch(args[0])
  {
      case 'website': 
      msg.channel.send("https://www.youtube.com/channel/UC8iE5nMPvia_NIUL_cXBCHA");
      break;
      case 'avatar':
          msg.reply(msg.author.displayAvatarURL());
          break;
          case 'clear':
              if (!args[1])
              {
              return msg.reply("Error")
              }
              else
              {
                  msg.channel.bulkDelete(args[1]);
                  break;
              }
            // case 'spamtag':
            //   if (!args[1])
            //   {
            //     return msg.reply("Error")
            //   }
            //   else
            //   {
            //     msg.channel.bulkAdd(args[1]);
            //     break;
            //   }
  }
  }
  

});

client.login('ODM5OTEzMTk5NTkxODgyNzYy.YJQkHw.mZ57-C6d0_cew7qoaX88GJir48Y');