import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
client.on('ready', () => {
    console.log('The bot is read')
})

client.on('message', (message) =>{
    if(message.content === '[놀자'){
        message.reply({
            content: '놀자에요',
        })
    }

})

client.login(process.env.TOKEN)
