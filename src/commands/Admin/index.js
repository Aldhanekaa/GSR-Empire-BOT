const { Client, Intents, Channel, TextChannel } = require('discord.js')
const Command = require('../../command')
const { admins } = require('../../config')

/**
 * @param {Client} client
 */
module.exports = (client) => {
    Command(client, 'servers', (message) => {
        if (admins.includes(message.author.id)) {
            message.author.send(
                `This bot has been added to ${client.guilds.cache.size} servers`
            )
            message.author.send(`===========================================`)

            let countServer = 0

            client.guilds.cache.forEach((guild, index) => {
                countServer += 1
                message.author.send(`${countServer}. ${guild.name}`)
                message.author.send(`members: ${guild.memberCount} `)
                message.author.send(
                    `------------------------------------------`
                )
            })

            return
        }
        // console.log(message, message.author, message.react);

        // message.channel.
        message.reply('You do not have permission to access this command')
        message.author.send('You do not have permission to access this command')
        return
    })
}
