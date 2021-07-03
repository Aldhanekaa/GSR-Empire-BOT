const { Client, Intents, TextChannel, MessageEmbed } = require('discord.js')

const Command = require('../command')

const AboutCommands = require('./about')

/**
 * @param {Client} client
 */
module.exports = (client) => {
    Command(client, ['ping', 'pingg'], (message) => {
        message.channel.send('pong!')
    })

    Command(client, 'help', (message) => {
        if (message.channel instanceof TextChannel) {
            if (message.author.bot) {
                message.reply('I only talk with bot :D')

                return
            }
            message.author.send(
                `
    Hello There,

        `,
                { files: ['https://i.imgur.com/2lW6jUg.jpeg'] }
            )
        }
    })

    Command(
        client,
        'am I gay?',
        (message) => {
            message.reply('yes you are.')
        },
        { noNeedPrefix: true }
    )

    AboutCommands(client)

    Command(client, ['server-info', 'server info', 'server'], (message) => {
        // console.log(message);
        // client.guilds.cache.forEach((guild) => {
        //   console.log(guild);
        // });

        message.channel.send(`
    Server Name: ${message.guild.name}
    Total Members: ${message.guild.memberCount}`)

        // message.channel.
    })
}
