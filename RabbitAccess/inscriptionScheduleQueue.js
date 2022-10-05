const amqp = require('amqplib/callback_api');

// this function should receive the body of th schedule
const createSchedule = ()=> {amqp.connect('amqp://146.148.79.102:5672', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    let queue = 'createScheduleQueue';
    // the schedule body
    let msg = 'Hello zzzz'; 

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

  setTimeout(function() {
    connection.close();
    process.exit(0);
}, 500);

});}



module.exports = { createSchedule }