const processMessage = require('./process');

module.exports = (req, res) => {

  if (req.body.object === 'page') {
    
    req.body.entry.forEach(entry => {
      console.log(req.body.entry)
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
            console.log(event)
            processMessage(event)
        }
      });
    });

    res.status(200).end();
  }
};

