/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List all commands and their descriptions.'),
  async execute(interaction) {
    const commands = interaction.client.commands.map(command => {
      return {
        name: command.data.name,
        description: command.data.description
      };
    });

    const embed = new MessageEmbed()
      .setColor('#0099FF')
      .setTitle('Available Commands')
      .setDescription('Here is a list of all available commands:')
      .addFields(commands.map(command => ({
        name: `/${command.name}`,
        value: command.description
      })));

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
};
