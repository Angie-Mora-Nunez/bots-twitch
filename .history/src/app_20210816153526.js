import tmi from 'tmi.js'

const options = {
	options: { debug: true },
	connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
	},
	identity: {
		username: 'Miiimobot',
		password: 'oauth:0frhwniegnrtd569y45dwdc0ly2g0u'
	},
	channels: [ 'Mimobry' ]
}

