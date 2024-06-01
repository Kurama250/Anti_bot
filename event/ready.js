/*
Created by Kurama
Github: https://github.com/Kurama250
License: Creative Commons - CC BY-NC-ND 4.0 by Kurama250
*/

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config/config.json');

module.exports = {
  name: 'ready',
  async execute(client) {
    console.log('-------------------------------------------------------------------------');
    console.log('            Created by github.com/Kurama250              ');
    console.log('License: Creative Commons - CC BY-NC-ND 4.0 by Kurama250');
    console.log(`Bot connected as ${client.user.tag}`);
    console.log('-------------------------------------------------------------------------');
    console.log('');
    console.log('-------------------------------------------------------------------------');
    console.log('Servers :');
    client.guilds.cache.forEach(guild => {
      console.log(` - ${guild.name} (${guild.id})`);
      console.log('-------------------------------------------------------------------------');
      console.log('');
    });
    
    const updatePresence = () => {
      client.user.setPresence({
        status: 'dnd',
        activities: [
          {
            name: 'Github.com/Kurama250',
            type: 'STREAMING',
            url: 'https://twitch.tv/discord'
          }
        ],
      });
    };

    updatePresence();

    const commands = client.commands.map(command => command.data.toJSON());
    const rest = new REST({ version: '9' }).setToken(config.token);

    try {
      console.log('-------------------------------------------------------------------------');
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands }
      );

      console.log('Successfully reloaded application (/) commands.');
      console.log('-------------------------------------------------------------------------');
    } catch (error) {
      console.error(error);
    }
  }
};
