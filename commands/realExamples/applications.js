const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('applications')
        .setDescription('Реальный пример приема заявок через модали.'),
    async execute(interaction) {
        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("appYes")
                    .setLabel("Да")
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId("appNo")
                    .setLabel("Нет")
                    .setStyle(ButtonStyle.Danger)
            );
        await interaction.reply({ content: `Вы уверены, что хотите подать заявку?`, components: [button], ephemeral: false });
    },
};