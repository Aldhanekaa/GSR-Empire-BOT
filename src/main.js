if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const { Client, Intents } = require('discord.js')

const Commands = require('./commands')

const BotStatus = require('./botStatus')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    partials: ['REACTION', 'MESSAGE'],
})
require('discord-buttons')(client)
/**
 * @type {Array<string>} admins
 */
let admins = []
try {
    admins = process.env.admins.split(',')
} catch (err) {
    admins = []
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    Commands(client)
    BotStatus(client)
})

client.login(process.env.bot_token)
