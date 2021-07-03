const { Client, Message } = require('discord.js')
const configJSON = require('./config.json')

/**
 * @typedef CommandConfig
 * @type {Object}
 * @property {?boolean} CommandConfig.noNeedPrefix
 * @property {?boolean} CommandConfig.caseSensitive
 */

/**
 * @param {Client} client
 * @param {string | Array<string>} alias
 * @param { (message: Message) => void } callback
 * @param { CommandConfig } config
 */
module.exports = (client, alias, callback, config) => {
    client.on('message', (message) => {
        // console.log(config)

        try {
            if (config.noNeedPrefix) {
                if (alias == message.content) {
                    callback(message)
                    return
                }

                if (Array.isArray(alias)) {
                    alias.forEach((alias) => {
                        if (alias == message.content) {
                            callback(message)
                        }
                    })

                    return
                }

                return
            }
        } catch (err) {
            // message.reply(String(err))
        }

        configJSON.prefixes.forEach((prefix) => {
            if (message.content.startsWith(prefix, 0)) {
                callCallback(alias, message, prefix, callback)

                if (Array.isArray(alias)) {
                    alias.forEach((alias) => {
                        callCallback(alias, message, prefix, callback)
                    })
                }
            }
        })
    })
}

/**
 * @param {string} alias
 * @param {Message} message
 * @param {string} prefix
 * @param { (message: Message) => void } callback
 */
function callCallback(alias, message, prefix, callback) {
    if (
        typeof alias == 'string' &&
        alias == message.content.slice(prefix.length)
    ) {
        callback(message)
        return
    }
    return
}
