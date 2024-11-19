create a repos
initilize the repo
node_module,packahge.json,package-lock.json
install express
create a server
listen to port no 8888
write a request handler for /test , / hello
install nodemon and update script inside package.json
diff between caret and tilde (^ ~ )
what is dependency
what is the use of -g on while install npm
initilize git
.gitignore
create a remotr repo on github
push all code to the github
git add . this will add all file to the github

homework
you have to play with route extension ex /hello /test
order of the routes matter
WE DO NOT USE BROWSER TO TEST API BROWSER IS THE WORST
when ever we do an route the brower use get method
we use postman to test api
install postman app and make a workspace/collection > test the api call
write a logic to handle get post patch put delete api call and test them on postman
Dynamic routing
create multiple route handler
next() function and errors along with res.send()
middleware
how express js basically handle request behind the scenes
satus code
diffrence between use all get
write dummy auth middleware for admin
write a dummy auth middleware for all user route except /user/login
error handling
order of error handling is matter
try and catch is the correct way of writing error
///////
DATA SCHEMA &
1----create a config folder in the src folder
2---- create a database.js file in the config folder
3---- to connecting to database or to take to the database we will be using npm lib name mongoos
4---- mongoos very amaziing lib to crete schema also give boilder plates also
5--- how to connnect mogoos to the databbase
6--- first goes to the database.js files
7--- using npm i mongoose we can installed the mongoose
8--- code
const mongoose = require("mongoose");
const connectDB = async () => {
await mongoose.connect(
"mongodb+srv://rahul6898sharma:7lcUjYPmexXHc6Tq@rahul1data.89iyr.mongodb.net"
);
};
connectDB()
.then(() => {
console.log("DataBase connection establish");
})
.catch((err) => {
console.error("Database connot connected");
});
9-- when i run into termial nom run ENGICON it will not connectd now we have to coonect database.js to the app.js file using require("./config/database")
10---- now in the connection string you write the name of data base it will connect to the spafic data base ex like--mongodb+srv://rahul6898sharma:7lcUjYPmexXHc6Tq@rahul1data.89iyr.mongodb.net/First_Data
if you not cnnecting to its it will refer whole cluster
//// IMP///
this is not the write and the bast way to connect
the problem is that when you run the code of app.js
app.listen(3000, () => {
// log your error
console.log("server is succesfully listen on the port number 3000");
});
our server is listen on the port number 3000
but what if our database is not setup but the server start listen
this is the big probelm
once
connectDB()
.then(() => {
console.log("DataBase connection establish");
app.listen(3000, () => {
// log your error
console.log("server is succesfully listen on the port number 3000");
});
})
.catch((err) => {
console.error("Database connot connected");
});
this is the correct waay of doing first eastablish data connection then server get response
---HOMEWORK---
1 CREATE A CLUSTER IF DONE
2 INSTALL MONGOOS
3 CONNECT THE APPLICATION TO THE DATABASE
4 CALL THE CONNECT DB FUNCTION DATABASE BEFORE STARTING APPLICATION
------- CREATE A SCHEMA ----------------
go and read the schema in the mongoos
create a folder in src models
in models create a user.js
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
indside this you can define the parameter
use the camilcase
ex like
firstName: {
type: String,
},
lastName: {
type: String,
},
emailId: {
type: String,
},
age: {
type: Number,
},
gender: {
type: String,
},
})
now we have to create the model
const userModel = mongoose.model("User", userSchema);

first is name of the model in this we use User
then passs the UserShema
we have creta a indtance of model like this
app.post("/signup", async (req, res) => {
const userObj = new User({
firstName: "Akashay",
lastName: "Saini",
emailId: "rahul@123",
});
await User.save();
});
---HOMEWORK---
create a user schema

---
