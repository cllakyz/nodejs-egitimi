const events = require('events');
const eventEmitter = new events.EventEmitter();

/*
eventEmitter.on('selamla', (user) => {
    console.log(`Merhaba ${user.name} ${user.surname}`);
});

const info = {
    name: 'Celal',
    surname: 'Akyüz'
};
eventEmitter.emit('selamla', info);
*/

// Yalnızca bir kere çalışır
eventEmitter.once('merhabaDe', () => {
    console.log('Merhaba');
});

eventEmitter.emit('merhabaDe');
eventEmitter.emit('merhabaDe');
