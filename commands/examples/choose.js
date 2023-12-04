const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('choose')
        .setDescription('Пример строки выбора'),

    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId('chooseMessage')
            .setPlaceholder('Сделайте свой выбор')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Плюшки')
                    .setDescription('Мягкие теплые плюшки.')
                    .setValue('plushki')
                    .setEmoji('🥐'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Синнабон')
                    .setDescription('Булочка с корицей и заварным кремом.')
                    .setValue('cinnabon')
                    .setEmoji('🥞'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Слойка с малиной.')
                    .setDescription('Любимый продукт Булата.')
                    .setValue('sloykawithraspberry')
                    .setEmoji('🍓'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        await interaction.reply({
            content: 'Выберите продукт!',
            components: [row],
        });
    },
};