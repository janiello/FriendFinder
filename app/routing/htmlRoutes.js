var path = require("path");

module.exports = function(app) {
    // Catch-all route that sends user to the "home" page
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Second route that sends the user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};