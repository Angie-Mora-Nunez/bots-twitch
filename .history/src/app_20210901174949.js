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

	if(message.toLowerCase() === 'hola'|| message.toLowerCase()=== 'buenas'|| message.toLowerCase()=== 'holaaa'|| message.toLowerCase().startsWith( 'buenas') || message.toLowerCase().startsWith('hola') ) {
		client.say(channel, `Hola , @${tags.username} Bienvenute al stream, estamos felices de tenerte por aca, ojala te la pases bien. No olvides dar host DarkMode.`);
	}
});


var jokes = [
"no se de que hablas.","sí","no","depende de lo que tu hagas.","es posible.","la vida no es asi.",
"es negativo.","posiblemente no","no tengo respuesta.","tu no me agradas,no responderé a ello.","la vida es dura.",
"soy solo un bot que voy a saber de eso.","la respuesta no te va agradar.",
"no me hables humano de shit.","confía en la divina papaya, y espera tu respuesta.","en mi opinión, sí.",
"es cierto.","debes confiar en ello.", "pregunta en otro momento","no me hables así."," mis fuentes me dicen que no."
];


client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase().startsWith("!magicball")) {
		client.say(channel, `Hola , @${tags.username} Estoy leyendo mi bola mágica y.... `+ jokes[Math.floor(Math.random() * jokes.length)]);
	}
});


client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!h') {

		client.say(channel, `Recuerda que con un host podemos llegar a recomendados PartyTime`);
	}
});

client.on('message', (channel, tags, message, self, moderator) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!view') {

		client.say(channel, `Recuerda que si tienes algo que hacer, puedes dejar la view para apoyar el canal PartyTime`);
	}
});

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
  if(self) return;

	if(message.toLowerCase() === '!a') {

		client.say(channel, `Recuerda que si tienes algo que hacer, puedes dejar la view para apoyar el canal PartyTime -Ul=moderator`);
	}
});
/*
var rusa = [ "La bala no fue disparada",
       "Ha muerto entre terribles sufrimientos",
       "La bala quedo encañonada",
       "La pistola era de agua",
       "La bala tenia un timeout de 60sg",
       "La bala tenía un timeout de 90sg",
       "La bala tenia un timeout de 120 sg",
       "La bala tenía un ban para otro usuario del chat",
       "La bala tenía un VIP semanal (se te quita pasado el tiempo)",
       "La bala tenía una recompensa del canal gratis (no mod)",
       "La bala tenía decir que hacer por 10 segundos",
       "La bala tenía un mod no puede hablar en el chat, tu decides quien",
       "La bala tenía timeout de 175sg",
       "Hacer spam con un mensaje"];

    client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!ruleta') {

		client.say(channel, rusa[Math.floor(Math.random() * rusa.length)]);
	}
}); */

var nume = 0;
client.on('message', (channel, tags, message, self) => {
	if(message.toLowerCase() === '!re') {
 nume++;
		client.say(channel, " Es un momento returbio en la comunidad de Bampi RuleFive. Hemos tenido una cantidad de: " + nume + " momentos turbios en el stream de hoy" );
	}
});


const num= Math.floor(Math.random()*100)+1;
client.on('message', (channel, tags, message, self) => {
  
	if (message.toLowerCase() === '!hermo') {
		client.say(channel,"Según mis estandares tu tienes un " + [Math.floor(Math.random()*100)+1] + "% de belleza");
	}
});


client.on('message', (channel, tags, message, self) => {
  
	if (message.toLowerCase() === '!dat') {
		client.say(channel,"A @B4mpi le dicen así porqué de pequeño, cuando estaba en la escuela, se le cayeron todos los dientes, excepto los colmillos, desde ahí su familia lo llamo vampiro. El nombre, al pasar de los años evoluciono a B4mpi");
	}
});

client.on('message', (channel, tags, message, self) => {
  
	if (message.toLowerCase() === '!redes') {
		client.say(channel,"Sigueme en mis redes sociales: linktr.ee/b4mpi" );
	}
});
client.on ("chat", function (channel, user, message, self) {
  if (user.mod || user ['user-type'] === 'mod') {
  if (message.toLowerCase() === '!h') {
    client.say(channel,"Recuerda que con host ayudas a que lleguemos a recomendados" );
  };
  };
  });
client.on ("chat", function (channel, user, message, self) {
  if (user.mod || user ['user-type'] === 'mod') {
  if (message.toLowerCase() === '!host') {
    client.say(channel,"Me ayuda mucho si me ayudas con un host. Desde el celular ve al botón de compartir y abajo dale hostear. Desde la compu ve a tu canal e ingresa /host B4mpi. Gracias guapetón") 
  };
  };
  });
client.on ("chat", function (channel, user, message, self) {
  if (user.mod || user ['user-type'] === 'mod') {
  if (message.toLowerCase() === '!view') {
    client.say(channel,"Me ayuda mucho si me dejas la view") 
  };
  };
  });

  client.on ("chat", function (channel, user, message, self) {
    if (user.mod || user ['user-type'] === 'mod') {
    if (message.startsWith ("!sigue")) {
    var input = message.slice(4).split(' ');
    client.say(channel, "Ve a darle corazoncito a  " +input+ " en https://www.twitch.tv/"+input+" para agradacerle por su gran apoyo al canal Kappa.");
    };
    };
    });
  
client.on('message', (channel, tags, message, self) => {
  
	if (message.toLowerCase() === '!comandos') {
		client.say(channel,"Lista de Comandos ☞!redes, ☞!tula, ☞!love, ☞!dorito ☞!duelo, ☞!uptime, ☞!tiempo, ☞!bh, ☞!sr pide una canción ☞!fiesta ☞!años, ☞!beso, ☞!cachetada, ☞!patada, ☞!hermo, ☞!dat, ☞!magicball, ☞!pvp");
	}
});

  client.on('hosted', (channel, username, viewers) => {
	onHostedHandler(channel, username, viewers)
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
  

function onHostedHandler (channel, username, viewers) {
  client.say(channel,
    `Hey @${username} muchas gracias por ese hosteazo con ${viewers} guapetes!`
  )
}



function onRaidedHandler(channel, username, viewers) {
  client.say(channel,
    `Hey Clap clap @${username} muchas gracias por ese raid con ${viewers} guapetes!. Ve a dar una vuelta por su canal y dale un corazoncito. https://www.twitch.tv/${username}` 
  )
}

function onSubscriptionHandler(channel, username, method, message, userstate) {
  client.say(channel,
    `Ulaaaa guapete @${username} muchas gracias por esa sub!`
  )
}

function onCheerHandler(channel, userstate, message)  {
  client.say(channel,
    `Clap clap @${userstate.username}  muchas gracias enormemente agradecidxs por esa cantidad increíble de ${userstate.bits} bits!`
  )
}

function onGiftPaidUpgradeHandler(channel, username, sender, userstate) {
  client.say(channel,
    `Hey @${username} muchas gracias por esa resub, estamos felices por ese increible apoyo`
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

