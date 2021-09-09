const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('joon', args => {
  console.log('first callback - ', args);
});
// emitter.on('joon', callback1);

emitter.on('joon', args => {
  console.log('second callback - ', args);
});

emitter.emit('joon', { message: 1 });
emitter.emit('joon', { message: 2 });
emitter.removeAllListeners();
emitter.emit('joon', { message: 3 });
