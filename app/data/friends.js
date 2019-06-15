// "Friends" variable that is an array of objects...
var friends = [
    {
        name: "Han Solo",
        scores: [5, 2, 5, 2, 3]
    }, 
    {
        name: "Luke Skywalker",
        scores: [4, 5, 2, 5, 3]
    },
    {
        name: "Poe Dameron",
        scores: [4, 3, 3, 4, 1]
    },
    {
        name: "Anakin Skywalker",
        scores: [5, 1, 5, 2, 2]
    },
    {
        name: "C-3PO",
        scores: [1, 4, 2, 3, 5]
    },
    {
        name: "Hondo Onaka",
        scores: [5, 1, 4, 2, 1]
    }
];

// Export the friends variable data to be required by the apiRoutes in order to display the data
module.exports = friends;