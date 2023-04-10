const processMessage = require('./process');

module.exports = (req, res) => {

  if (req.body.object === 'page') {
    let lastsent = ""
    req.body.entry.forEach(entry => {
      console.log(req.body.entry)
     
      entry.messaging.forEach(event => {
        console.log(entry.messaging)
        if (event.message && event.message.text) {
  
            if (lastsent === event.message.text){
            return}
            console.log(event)
            processMessage(event)
            
            
        }
        
      });
    });

    res.status(200).end();
  }
};

