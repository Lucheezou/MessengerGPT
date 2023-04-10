const processMessage = require('./process');

module.exports = (req, res) => {
let lastsent = "";
  if (req.body.object === 'page') {
    
    req.body.entry.forEach(entry => {
      console.log(req.body.entry)
      console.log(req.body.entry.messaging)
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
            if (lastsent === event.message.text){
            return
            }
            console.log(event)
            processMessage(event)
           
            lastsent = event.message.text
        }
        
      });
    });

    res.status(200).end();
  }
};

