const { Events, ModalBuilder, TextInputBuilder, ActionRowBuilder,TextInputStyle } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(`Error executing ${interaction.commandName}`);
                console.error(error);
            }
        } else if (interaction.isButton()) {
            if (interaction.customId === 'acceptbutton') {
                const modal = new ModalBuilder()
                    .setCustomId('zayavka')
                    .setTitle('Принять заявку')

                const playerId = new TextInputBuilder()
                    .setCustomId('playerIdInput')
                    .setLabel("Discord ID пользователя")
                    .setStyle(TextInputStyle.Short);
                const playerNickname = new TextInputBuilder()
                    .setCustomId('playerNicknameInput')
                    .setLabel("Ник пользователя в Minecraft")
                    .setStyle(TextInputStyle.Short);

                const firstActionRow = new ActionRowBuilder().addComponents(playerId);
                const secondActionRow = new ActionRowBuilder().addComponents(playerNickname);

                modal.addComponents(firstActionRow, secondActionRow);

                await interaction.showModal(modal)
            }
            if (interaction.customId === 'cancelbutton') {
                await interaction.reply('ну и иди нах')
            }
            if (interaction.customId === 'banbutton') {
                await interaction.reply('порно')
            }
        } else if (interaction.isStringSelectMenu()) {
            //
        } else if (interaction.isModalSubmit()) {
            if (interaction.customId === 'zayavka') {
                const zayavkichannel = await client.channels.fetch('966338567863402608');
                const playerId = interaction.fields.getTextInputValue('playerIdInput');
                const playerNickname = interaction.fields.getTextInputValue('playerNicknameInput');
                await interaction.reply({ content: `Воркаем`})
                await interaction.channel.send({ content: `Игрок ${playerNickname} (<@${playerId}>) добавлен на сервер! Заявку принял <@${interaction.member.user.id}>`})
                console.log({ playerId, playerNickname });
                zayavkichannel.send({ content: `<@${playerId}> добавлен`})
            }
        }
    },
};