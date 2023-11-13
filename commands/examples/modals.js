const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modals')
        .setDescription('Показывает модали'),
    async execute(interaction) {
        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("modalbutton")
                    .setLabel("Показать окно")
                    .setStyle(ButtonStyle.Success)
            );
        await interaction.reply({ content: `Пример модалей`, components: [button], ephemeral: false });
    },
};