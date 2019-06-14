// Requiring the file with my friends object so I can create a function to display it
var friends = require("../data/friends.js");

// GET route that displays the json format of the friends object
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // POST route that allows the user to add a new friend to the object array
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        // To confirm, the user gets a message and the json data of what they entered
        res.json("Friend added!", req.body);
    });
};