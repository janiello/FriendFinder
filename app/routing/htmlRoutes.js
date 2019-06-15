var path = require("path");

module.exports = function(app) {
    // Route that sends the user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // Catch-all route that sends user to the "home" page if no matching route is found
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};