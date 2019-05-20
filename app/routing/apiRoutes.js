//what data the user sees and what is posted from the server
let friendsData = require('../data/friends-data.js');

module.exports = function (app) {
  //getting data from server
  app.get('/api/friends', function (req, res) {
    return res.json(friendsData);
  });

  //posting data to apis
  app.post('/api/friends', function (req, res) {
    let totalArr = [];
    let friendsArrScores = [];
    friendsData.push(req.body);
    res.json();
    console.log(friendsArrScores);
    // transfer arrays to numbers
    // let mineScores = friendsData.slice(-1).scores.map(Number);
    // let newFriend = req.body.slice(-1);
    console.log(mineScores);

    // for (let i = 0; i < friendsArr.length; i++) {
    //   friendsArrScores = friendsArr[i].scores.map(Number);
    //   console.log(friendsArrScores);
    //   let totalDiff = 0;
    //   for (let i = 0; i < newFriendScores.length; i++) {

    //     // finding the total difference sum
    //     totalDiff += Math.abs(newFriendScores[i] - friendsArrScores[i]);
    //   }
    //   console.log(totalDiff);

    //   // pushing totalDiff to totalArr and then need to find min number
    //   totalArr.push(totalDiff);
    // }
    // console.log(totalArr);
    // //now we need to find a min number in totalDiff array and
    // //calculate min number and find its index which is going to equal the best friend
    // indexBestFriend = totalArr.indexOf(Math.min.apply(null, totalArr));
    // console.log(indexBestFriend);
    // matchedFriendName = friendsArr[indexBestFriend].name;
    // matchedFriendPhoto = friendsArr[indexBestFriend].photo;
    // console.log(matchedFriendName);
    // console.log(matchedFriendPhoto);
    // friendsData.push(req.body);
    // res.json(true);
  });


}