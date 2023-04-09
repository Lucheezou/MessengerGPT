const processMessage = require('./process');

module.exports = (req, res) => {
  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
            if (lastsent === event.message.text){
              return;
            }
            console.log(event)
            processMessage(event)
            let lastsent = event.message.text;
        }
      });
    });

    res.status(200).end();
  }
};

