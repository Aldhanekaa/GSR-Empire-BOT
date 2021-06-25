const { Client, Message } = require('discord.js');
const config = require('./config.json');

/**
 * @param {Client} client
 * @param {string | Array<string>} alias
 * @param { (message: Message) => void } callback
 * @param { boolean } noNeedPrefix
 */
module.exports = (client, alias, callback, noNeedPrefix) => {
  client.on('message', (message) => {
    if (noNeedPrefix) {
      if (alias == message.content) {
        callback(message);
        return;
      }

      if (Array.isArray(alias)) {
        alias.forEach((alias) => {
          if (alias == message.content) {
            callback(message);
          }
        });

        return;
      }

      return;
    }
    config.prefixes.forEach((prefix) => {
      if (message.content.startsWith(prefix, 0)) {
        // console.log(message.content);
        // console.log(message.content.slice(prefix.length));

        callCallback(alias, message, prefix, callback);

        if (Array.isArray(alias)) {
          alias.forEach((alias) => {
            callCallback(alias, message, prefix, callback);
          });
        }
      }
    });
  });
};

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
    callback(message);
    return;
  }
  return;
}
