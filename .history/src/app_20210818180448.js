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

	if(message.toLowerCase() === '!view') {

		client.say(channel, `Recuerda que si tienes algo que hacer, puedes dejar la view para apoyar el canal PartyTime`);
	}
});

var jokes = [
"No se de que hablas","Sí","No","Depende de lo que tu hagas","Es posible","La vida no es asi",
"Es negativo","Posiblemente no","No tengo respuesta"
];





client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!re') {

		client.say(channel, `Es un momento returbio en la comunidad de Bampi RuleFive`);
	}
});

client.on('message', (channel, tags, message, self) => {
	if (message.toLowerCase() === '!s') {
		client.say(channel, jokes[Math.floor(Math.random() * jokes.length)]);
	}
});


  client.on('hosted', (channel, username, viewers, autohost) => {
	onHostedHandler(channel, username, viewers, autohost)
  })
  
  client.on('subscription', (channel, username, method, message, userstate) => {
	onSubscriptionHandler(channel, username, method, message, userstate)
  })
  
  client.on('raided', (channel, username, viewers) => {
	onRaidedHandler(channel, username, viewers)
  })
  
  client.on('cheer', (channel, userstate, message) => {
	onCheerHandler(channel, userstate, message)
  })
  
  client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
	onGiftPaidUpgradeHandler(channel, username, sender, userstate)
  })
  
  client.on('hosting', (channel, target, viewers) => {
	onHostingHandler(channel, target, viewers)
  })
  
  client.on('reconnect', () => {
	reconnectHandler()
  })
  
  client.on('resub', (channel, username, months, message, userstate, methods) => {
	resubHandler(channel, username, months, message, userstate, methods)
  })
  
  client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
	subGiftHandler(channel, username, streakMonths, recipient, methods, userstate)
  })
  

function onHostedHandler (channel, username, viewers, autohost) {
  client.say(channel,
    `Hey @${username} muchas gracias por ese hosteazo con ${viewers} guapetes!`
  )
}

function Random () {
	const lord =[
		"mano","sandia","piña"	
		]
		
		const pa= lord.forEach(element => console.log(element));
		return pa
}

function onRaidedHandler(channel, username, viewers) {
  client.say(channel,
    `Clap clap @${username} muchas gracias por ese raid con ${viewers} guapetes!`
  )
}

function onSubscriptionHandler(channel, username, method, message, userstate) {
  client.say(channel,
    `Ulaaaa guapete @${username} muchas gracias por esa sub!`
  )
}

function onCheerHandler(channel, userstate, message)  {
  client.say(channel,
    `Clap clap @${userstate.username} por esa cantidad increíble de ${userstate.bits} bits!`
  )
}

function onGiftPaidUpgradeHandler(channel, username, sender, userstate) {
  client.say(channel,
    `Hey @${username} muchas gracias por esa resub, increible apoyo`
  )
}

function onHostingHandler(channel, target, viewers) {
  client.say(channel,
    `Ahora estamos hosteando a ${target} con ${viewers} viewers!`
  )
}


function resubHandler(channel, username, months, message, userstate, methods) {
  const cumulativeMonths = userstate['msg-param-cumulative-months']
  client.say(channel,
    `Increible guapete @${username} por esa ${cumulativeMonths} de sub!`
  )
}

function subGiftHandler(channel, username, streakMonths, recipient, methods, userstate) {

  client.say(channel,
    `Hey hey @${username} muchas gracias por esa sub de regalo a ${recipient}}.`
  )} 

  function checkTwitchChat(userstate, message, channel) {
  console.log(message)
  message = message.toLowerCase()
  let shouldSendMessage = false
  shouldSendMessage = BLOCKED_WORDS.some(blockedWord => message.includes(blockedWord.toLowerCase()))
  if (shouldSendMessage) {
    // tell user
    client.say(channel, `@${userstate.username}, lo siento, pero tu mensaje fue eliminado.`)
    // delete message
    client.deletemessage(channel, userstate.id)
  }
}

