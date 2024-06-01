/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const config = require('../config/config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('disable')
    .setDescription('Disable the anti-bot protection.')
    .setDefaultPermission(false),
  async execute(interaction) {
    if (!config.whitelist.includes(interaction.user.id)) {
      const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Permission Denied')
        .setDescription('You do not have permission to disable the anti-bot protection.');
      return await interaction.reply({ embeds: [embed], ephemeral: true });
    }

    config.antiBotEnabled = false;
    fs.writeFileSync('./config/config.json', JSON.stringify(config, null, 2));

    const embed = new MessageEmbed()
      .setColor('#00FF00')
      .setTitle('Anti-Bot Protection Disabled')
      .setDescription('Anti-bot protection has been disabled.');
    await interaction.reply({ embeds: [embed] });
  }
};
