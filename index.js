const fs = require('fs')
const Discord = require('discord.js')

const client = new Discord.Client

const token = (process.env.TOKEN)
const prefix = (process.env.prefix)
const clientID = (process.env.clientID)
const clientSecret = (process.env.clientSECRET)
const message = (process.env.console)

command_files = new Discord.Collection
event_files = new Discord.Collection

['command_handler', 'event_handler'].forEach(handler => {
    require('./handler/${hanlder}')
});



//const CommandFiles = fs.readdirSync('./bot_cmds/').filter(file => file.endsWith('js'));
//for (const file of CommandFiles) {

//    client.commands.set(command.name, command)
//}




client.once('ready', () => {
    console.log(message)
})

client.login(token)