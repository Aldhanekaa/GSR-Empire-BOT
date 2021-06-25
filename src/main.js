if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const {
  Client,
  Intents,
  Channel,
  TextChannel,
  MessageEmbed,
} = require('discord.js');

const Command = require('./command');
const AdminCommands = require('./adminCommands');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

/**
 * @type {Array<string>} admins
 */
let admins = [];
try {
  admins = process.env.admins.split(',');
} catch (err) {
  admins = [];
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  AdminCommands(client);

  Command(client, ['ping', 'pingg'], (message) => {
    message.channel.send('pong!');
  });

  Command(client, 'help', (message) => {
    if (message.channel instanceof TextChannel) {
      if (message.author.bot) {
        message.reply('I only talk with bot :D');

        return;
      }
      message.author.send(
        `
Hello There, 
    
    `,
        { files: ['https://i.imgur.com/2lW6jUg.jpeg'] },
      );
    }
  });

  Command(
    client,
    'am I gay?',
    (message) => {
      message.reply('yes you are.');
    },
    true,
  );

  Command(client, ['about', 'bout'], (message) => {
    const embed = new MessageEmbed()
      .setTitle('MTs TechnoNatura Bot')
      .setURL(
        'https://github.com/mts-technonatura/mts-technonatura-discord-bot',
      )
      .setThumbnail('https://mts-technonatura.vercel.app/favicon.ico')
      .setImage('https://mts-technonatura.vercel.app/favicon.ico')
      .setDescription(
        'MTs TechnoNatura Discord bot is made for MTs TechnoNatura Discord Servers',
      )
      .setColor('#00A77D')
      .setFooter('Made with love by Aldhanekaa');
    message.channel.send(embed);
  });

  Command(client, 'server', (message) => {
    // console.log(message);
    // client.guilds.cache.forEach((guild) => {
    //   console.log(guild);
    // });

    // console.log(message, message.author, message.react);

    message.channel.send(`This server has ...`);
    // message.channel.
  });

  Command(client, ['server-info', 'server info'], (message) => {
    // console.log(message);
    // client.guilds.cache.forEach((guild) => {
    //   console.log(guild);
    // });

    message.channel.send(`
Server Name: ${message.guild.name}
Total Members: ${message.guild.memberCount}`);

    // message.channel.
  });

  client.user.setPresence({
    activity: {
      name: 'playing me',
      url: 'https://github.com/aldhanekaa',
      type: 'PLAYING',
    },
    status: 'online',
  });
  client.user.send;
});

client.login(process.env.bot_token);
