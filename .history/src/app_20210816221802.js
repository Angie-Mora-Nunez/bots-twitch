import tmi from 'tmi.js'
import { BOT_USERNAME , OAUTH_TOKEN, CHANNEL_NAME } from './constants'

const options ={
	options: { debug: true },
  connection :{
    reconnect: true,
    secure: true
  },
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: [ CHANNEL_NAME ]

}
const client = new tmi.Client(options);

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === 'hola') {
		client.say(channel, `Hola , @${tags.username} Bienvenute al stream, estamos felices de tenerte por aca, ojala te la pases bien. No olvides dar host DarkMode`);
	}
});
client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!h') {

		client.say(channel, `Recuerda que con un host podemos llegar a recomendados PartyTime`);
	}
});

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!re') {

		client.say(channel, `Es un momento returbio en la comunidad de Bampi RuleFive`);
	}
});

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

const man = ''
	if(message.toLowerCase() === '!p') {

		client.say(channel, $(man));
	}
});







client.on('hosted', (channel, username, viewers, autohost) => {
  onHostedHandler(channel, username, viewers, autohost)
})

