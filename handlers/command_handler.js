const fs = require('fs')

module.exports = (client, Discord) => {
    const CommandFiles = fs.readdirSync('./bot_cmds/').filter(file => file.endsWith('js'));
    for (const file of CommandFiles) {
        const command = require('./commands/${file}')
        if (command.name) {
            client.commands.set(command.name, command)
        } else {
            continue;
        }

  }
}