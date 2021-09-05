exports.help = (prefix) => {
  return `
[Main]
=> ${prefix}help
=> ${prefix}menu

[Fun]
=> ${prefix}meme
`
}
exports.wait = () => {
  return `Wait...`
}
exports.hours = () => {
  return `Hours`
}
exports.minute = () => {
  return `Minute`
}
exports.second = () => {
  return `Second`
}
exports.hello = () => {
  return `Hello`
}
exports.welcome = () => {
  return `Welcome to`
}
exports.goodbye = () => {
  return `GoodBye`
}
exports.done = () => {
  return `Done`
}
exports.onlygroup = () => {
  return `[ ! ] This command can only be used in groups.`
}
exports.onlyadmin = () => {
  return `[ ! ] This command can only be used by group admins.`
}
exports.onlybadmin = () => {
  return `[ ! ] This command can only be used when the bot is an admin group.`
}
exports.acc = () => {
  return `Order accepted.`
}
exports.addedadmin = () => {
  return `add to be admin group.`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Name*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *Level*: ${getLevel} ~> ${getLevelingLevel(sender)}
Congrats!! 🎉🎉`
}
