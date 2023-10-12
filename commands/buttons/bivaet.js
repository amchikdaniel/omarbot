const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bivaet')
    .setDescription('yeayapidor'),
    async execute (interaction) {
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("acceptbutton")
                .setLabel("Разрешаю")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setCustomId("cancelbutton")
            .setLabel("Не разрешаю")
            .setStyle(ButtonStyle.Danger),

            new ButtonBuilder()
            .setCustomId('banbutton')
            .setLabel("Porno")
            .setStyle(ButtonStyle.Primary)
        );

        await interaction.reply({ content: `Можно я шпекну Данила в его шоколадное очечко?`, components: [button], ephemeral: true });

    }
}