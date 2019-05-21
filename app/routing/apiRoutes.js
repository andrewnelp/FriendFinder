//what data the user sees and what is posted from the server
let friendsData = require('../data/friends-data.js');

module.exports = function (app) {
  //getting data from server
  app.get('/api/friends', function (req, res) {
    return res.json(friendsData);
  });

  //posting data to apis
  app.post('/api/friends', function (req, res) {
    friendsData.push(req.body);
    res.json();
  });

}