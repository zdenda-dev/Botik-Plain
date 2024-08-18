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

// Ping message:
client.on("messageCreate", (message) => {
    if (message.author.bot) {
      return;
    }
  
    if (message.content === "!ping"){
        message.channel.send('Pong!');
    }
})

client.login(process.env.TOKEN);
