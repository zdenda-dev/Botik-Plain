require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Ready test message:
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

// Hello message:
client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    message.reply('hello');
  }
});

// Test message:
client.on("messageCreate", (message) => {
    if (message.content === "!test"){
        message.channel.send('**Do you want to create your own Discord bot?**'
        );
    }
})

client.login(process.env.TOKEN);
