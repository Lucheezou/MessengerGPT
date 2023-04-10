const processMessage = require('./process');

module.exports = (req, res) => {
  let lastsent;
  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
             
            if (lastsent === event.message.text){
              return;
            }
            lastsent = event.message.text;
            console.log(event)
            processMessage(event)
           
        }
      });
    });

    res.status(200).end();
  }
};

