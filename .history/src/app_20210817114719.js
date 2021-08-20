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

const man = 'sandia'
	if(message.toLowerCase() === '!p') {
	let man = ["hola","hola1","holas"]
	const si = Math.floor(Math.random() * man.lengthMathrandom)

		client.say(channel, si);
	}
});







client.on('hosted', (channel, username, viewers, autohost) => {
  onHostedHandler(channel, username, viewers, autohost)
})




function onHostedHandler (channel, username, viewers, autohost) {
  client.say(channel,
    `Thank you @${username} for the host of ${viewers}!`
  )
}

function onRaidedHandler(channel, username, viewers) {
  client.say(channel,
    `Thank you @${username} for the raid of ${viewers}!`
  )
}

function onSubscriptionHandler(channel, username, method, message, userstate) {
  client.say(channel,
    `Thank you @${username} for subscribing!`
  )
}

function onCheerHandler(channel, userstate, message)  {
  client.say(channel,
    `Thank you @${userstate.username} for the ${userstate.bits} bits!`
  )
}

function onGiftPaidUpgradeHandler(channel, username, sender, userstate) {
  client.say(channel,
    `Thank you @${username} for continuing your gifted sub!`
  )
}

function onHostingHandler(channel, target, viewers) {
  client.say(channel,
    `We are now hosting ${target} with ${viewers} viewers!`
  )
}


function resubHandler(channel, username, months, message, userstate, methods) {
  const cumulativeMonths = userstate['msg-param-cumulative-months']
  client.say(channel,
    `Thank you @${username} for the ${cumulativeMonths} sub!`
  )
}

function subGiftHandler(channel, username, streakMonths, recipient, methods, userstate) {

  client.say(channel,
    `Thank you @${username} for gifting a sub to ${recipient}}.`
  ){}