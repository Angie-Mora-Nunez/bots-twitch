import tmi from 'tmi.js'
const client = new tmi.Client({
	options: { debug: true },
  connection :{
    reconnect: true,
    secure: true
  },
	identity: {
		username: 'Miiimobot',
		password: 'oauth:0frhwniegnrtd569y45dwdc0ly2g0u'
	},
	channels: [ 'Mimobry' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});
