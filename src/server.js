// install and import express
const express = () => {} ; // eslint-disable-line
let app = express() ; // create an instance of express

// Code here

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../assets/users.html");
}
);

app.get("/users", (req, res) => {
    res.json(users);
}
);

app.get("/users/:id", (req, res) => {
    res.json(users[req.params.id]);
}
);




// Note: Do not remove this export statement
module.exports = app ; 
 
 
 

