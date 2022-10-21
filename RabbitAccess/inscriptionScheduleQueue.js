const amqp = require('amqplib/callback_api')

// this function should receive the body of th schedule
const createSchedule = (schedule) => {
  amqp.connect('amqp://35.223.72.88:5672', function (error0, connection) {
    if (error0) {
      throw error0
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1
      }
      const queue = 'createScheduleQueue'
      // the schedule body
      // let msg = 'Hello zzzz';

      channel.assertQueue(queue, {
        durable: false
      })

      channel.sendToQueue(queue, Buffer.from(schedule))
      console.log(' [x] schedule sent  %s', schedule)
    })

    setTimeout(function () {
      connection.close()
    }, 500)
  })
}

module.exports = { createSchedule }
