const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Перезагрузить команду.')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('Команда, которую нужно перезагрузить.')
                .setRequired(true)),
    async execute(interaction) {
        const commandName = interaction.options.getString('command', true).toLowerCase();
        const command = interaction.client.commands.get(commandName);

        if (!command) {
            return interaction.reply(`Команды \`${commandName}\` не существует!`);
        }

        delete require.cache[require.resolve(`./${command.data.name}.js`)];

        try {
            interaction.client.commands.delete(command.data.name);
            const newCommand = require(`./${command.data.name}.js`);
            interaction.client.commands.set(newCommand.data.name, newCommand);
            await interaction.reply(`Команда \`${newCommand.data.name}\` была перезагружена!`);
        } catch (error) {
            console.error(error);
            await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
        }
    },
};