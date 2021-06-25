/**
 * @type {Array<string>} admins
 */
let admins = [];
try {
  admins = process.env.admins.split(',');
} catch (err) {
  admins = [];
}

module.exports = {
  admins: admins,
};
