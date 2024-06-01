/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const config = require('./config/config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./cmd/${file}`);
  client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./event').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./event/${file}`);
  client.on(event.name, (...args) => event.execute(...args, client));
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.on('guildMemberAdd', member => {
  if (member.user.bot && config.antiBotEnabled) {
    member.kick('Anti-bot protection is enabled.')
      .then(() => {
        console.log(`Bot ${member.user.tag} was kicked due to anti-bot protection.`);
      })
      .catch(err => {
        console.error(`Failed to kick bot ${member.user.tag}:`, err);
      });
  }
});

client.login(config.token);