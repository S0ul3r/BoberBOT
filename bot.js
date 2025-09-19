const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Listen for messages
client.on(Events.MessageCreate, message => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Check if message starts with a command prefix
    if (message.content.startsWith('!')) {
        const args = message.content.slice(1).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // Handle different commands
        switch (command) {
            case 'macro':
                message.reply('**Rogue WA\'s:**\n[Wago.io TWW Rogue](https://wago.io/search/imports/wow/tww-weakaura?q=tag%3Acl4)');
                break;
            
            case 'ping':
                message.reply('Pong!');
                break;
            
            case 'guides':
                message.reply('Rogue Guides:\nWoWhead: https://www.wowhead.com/classes#rogue\nIcy Veins: https://www.icy-veins.com/wow/class-guides\nMethod: https://www.method.gg/guides\nDiscord: https://discord.gg/ravenholdt');
                break;
            
            case 'tricks':
                message.reply('[Smart tricks WA on tank](https://wago.io/kQ2LnX4zP), this require the following macro:\n```\n#showtooltip Tricks of the Trade\n/click SmartMisdirect LeftButton 1\n/click SmartMisdirect LeftButton 0\n```');
                break;
            
            case 'stats':
                message.reply('**Assassination:** Crit = Mastery > Haste > Vers\n**Outlaw:** Haste (until cap) > Versatility >= Crit > Haste (after cap) >= Mastery\n**Subtlety:** Mastery = Vers > Crit >> Haste');
                break;
            
            case 'help':
                message.reply('Available commands:\n`!macro` - Rogue WeakAuras\n`!guides` - Rogue guides links\n`!tricks` - Smart tricks WeakAura macro\n`!stats` - Stat priorities for all specs\n`!ping` - Test if bot is responsive\n`!help` - Show this help message');
                break;
            
            default:
                // Optional: respond to unknown commands
                // message.reply('Unknown command. Type `!help` for available commands.');
                break;
        }
    }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
