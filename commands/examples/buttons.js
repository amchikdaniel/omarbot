const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('buttons')
    .setDescription('Примеры кнопок'),
    async execute (interaction) {
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("acceptbutton")
                .setLabel("Все хорошо")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setCustomId("cancelbutton")
            .setLabel("Все плохо")
            .setStyle(ButtonStyle.Danger),

            new ButtonBuilder()
            .setCustomId('banbutton')
            .setLabel("Обычная кнопка")
            .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('secondary')
                .setLabel("Вторичная кнопка")
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setURL("https://google.com/")
                .setLabel("Ссылка")
                .setStyle(ButtonStyle.Link)
        );

        await interaction.reply({ content: `Примеры кнопок`, components: [button], ephemeral: true });

    }
}