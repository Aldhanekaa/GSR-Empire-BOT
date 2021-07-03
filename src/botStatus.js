const { Client } = require('discord.js')

/**
 * @param {Client} client
 */
module.exports = (client) => {
    /**
     * @type {'watching you'|'play command'|'about'|'prefix'}
     */
    let nextShow = 'watching you'

    setInterval(() => {
        switch (nextShow) {
            case 'watching you':
                client.user.setPresence({
                    activity: {
                        name: ' Your Activities 👀',
                        type: 'WATCHING',
                    },
                    status: 'online',
                })

                nextShow = 'play command'
                break

            case 'play command':
                client.user.setPresence({
                    activity: {
                        name: 'Type $- to play with me !',
                        type: 'PLAYING',
                    },
                    status: 'online',
                })

                nextShow = 'about'

                break

            case 'about':
                client.user.setPresence({
                    activity: {
                        name: 'Type "about" to see more about me',
                        type: 'PLAYING',
                    },
                    status: 'online',
                })

                nextShow = 'prefix'

                break

            case 'prefix':
                client.user.setPresence({
                    activity: {
                        name: 'Prefix is: $-',
                        type: 'WATCHING',
                    },
                    status: 'online',
                })

                nextShow = 'watching you'

                break

            default:
                break
        }
    }, 1000 * 10)
}
