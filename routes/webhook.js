var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  if (req.body.object === "page") {
    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");

    // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.
  } 
  else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

module.exports = router;
