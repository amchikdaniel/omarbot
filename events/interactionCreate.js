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
            if (interaction.customId === "modalbutton") {
                const modalpenis = new ModalBuilder()
                    .setCustomId('modalpenis')
                    .setTitle('Пример модали');

                const usersname = new TextInputBuilder()
                    .setCustomId('sendername')
                    .setLabel("Ваше имя")
                    .setStyle(TextInputStyle.Short)
                    .setMaxLength(15)
                    .setPlaceholder('Введите ваше имя')
                    .setRequired(true);

                const shortAnswer = new TextInputBuilder()
                    .setCustomId('shortansw')
                    .setLabel("Короткий ответ")
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false);

                const longAnswer = new TextInputBuilder()
                    .setCustomId('longansw')
                    .setLabel("Длинный ответ")
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(false);

                const customSettings = new TextInputBuilder()
                    .setCustomId('customset')
                    .setLabel('Настраиваемое поле')
                    .setStyle(TextInputStyle.Paragraph)
                    .setMaxLength(1000)
                    .setMinLength(3)
                    .setPlaceholder('Поле с настройками (минимальное и максимальное кол-во символов, обязательность заполнения поля)')
                    .setRequired(true);


                const actualFirstActionRow = new ActionRowBuilder().addComponents(usersname);
                const firstActionRow = new ActionRowBuilder().addComponents(shortAnswer);
                const secondActionRow = new ActionRowBuilder().addComponents(longAnswer);
                const thirdActionRow = new ActionRowBuilder().addComponents(customSettings);


                modalpenis.addComponents(actualFirstActionRow, firstActionRow, secondActionRow, thirdActionRow);

                await interaction.showModal(modalpenis);
            }
        } else if (interaction.isStringSelectMenu()) {
            //
        } else if (interaction.isModalSubmit()) {
            console.log(interaction)
            const sender = interaction.fields.getTextInputValue('sendername')
            const shortan = interaction.fields.getTextInputValue('shortansw');
            const longan = interaction.fields.getTextInputValue('longansw');
            const setan = interaction.fields.getTextInputValue('customset');

            interaction.reply(`Имя пользователя: ${sender}\nВаш короткий ответ: ${shortan}\nВаш длинный ответ: ${longan}\nВаш третий ответ: ${setan}`)
        }
    },
};