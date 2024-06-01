/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Check the status of the anti-bot protection.')
    .setDefaultPermission(false),
  async execute(interaction) {
    const status = config.antiBotEnabled ? 'enabled' : 'disabled';
    const embed = new MessageEmbed()
      .setColor('#0099FF')
      .setTitle('Anti-Bot Protection Status')
      .setDescription(`Anti-bot protection is currently ${status}.`);
    await interaction.reply({ embeds: [embed] });
  }
};
