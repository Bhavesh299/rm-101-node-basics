const express = require('express') ;
const app = express() ;
const Fs = require('fs') ;
const Cors=require('cors') ;

app.use(Cors()) ;


app.get('/', function(req, res) {
    Fs.readFile(__dirname + '/assets/users.html', 'utf8', function(err, data) {
        res.send(data) ;
    })
}); 


app.get('/users', (req, res) => {
    Fs.readFile("./src/assets/user.json", function(err, data) {
        if (err) throw err ;
        const Users = JSON.parse(data) ;
        res.send(Users) ;
    }) ;
});
app.get('/users/:id', (req, res) => {
    const ID = req.query.id;
    Fs.readFile("./src/assets/user.json", function(err, data) {
        if (err) throw err ;
        const Users = JSON.parse(data) ;
        const User = Users.find(User => user.id == ID ) ;
        res.send(User) ;
        
        }) ;
    
    });

app.post('/users', (req, res) => {
    const User = req.body ;
    Fs.writeFile("./src/assets/users.json", JSON.stringify(User), err => {

        if (err) throw err; 
       
        console.log("The file has been saved!");
    }); 
});    



app.listen(8000, () => {
    console.log('Server is running on port 8000') ;

    
});
// Note: Do not remove this export statement
module.exports = app;
