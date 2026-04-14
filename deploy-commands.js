const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Check bot status'
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationCommands('1493637869804322927'),
      { body: commands }
    );

    console.log('Done!');
  } catch (error) {
    console.error(error);
  }
})();
