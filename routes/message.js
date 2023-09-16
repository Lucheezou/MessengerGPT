const processMessage = require('./process');

module.exports = (req, res) => {
  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
       
            console.log(event)
            processMessage(event)
            
      });
    });

    res.status(200).end();
  }
};

