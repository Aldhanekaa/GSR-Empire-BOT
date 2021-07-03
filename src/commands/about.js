const { Client, MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const Command = require('../command')
/**
 * @param {Client} client
 */
module.exports = (client) => {
    Command(client, ['about', 'bout'], (message) => {
        const embed = new MessageEmbed()
            .setTitle('Green Sakinah Empire Discord Bot')
            .setColor('#00A77D')
            .setFooter('Made with love by Aldhanekaa')

        const sourceCodeButton = new MessageButton()
            .setStyle('url')
            .setLabel('source code')
            .setURL('https://github.com/Aldhanekaa/GSR-Empire-BOT')

        const sourceCodeActionRowButton = new MessageActionRow().addComponent(
            sourceCodeButton
        )

        message.channel.send({
            embed: embed,
            components: [sourceCodeActionRowButton],
        })
    })

    return
}
