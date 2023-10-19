const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportlocalsession = require('passport-local-mongoose')

const app = express()
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    secret : "Our little secret",
    resave : false,
    saveUninitialized : false
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect("mongodb://127.0.0.1:27017/userdb" , ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
}))

const userSchema = new mongoose.Schema({
    email : {
        type : String,
    },
    password : {
        type : String,
        
    }
})

userSchema.plugin(passportlocalsession)

const User = mongoose.model('User',userSchema)

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.get("/" , function(req,res){
    res.render("home")
})
app.get("/register" , function(req,res){
    res.render("register")
})
app.get("/login" , function(req,res){
    res.render("login" ,{err : ""})
})

app.get("/secrets",function(req,res){
    if(req.isAuthenticated()){
        res.render("secrets")
    }else{
        res.redirect("login")
    }
})

app.post("/register" , function(req,res){

    User.register({username : req.body.username} ,req.body.password ,function(err,user){
        if(err){
            console.log(err)
            res.redirect("/register")
        }else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets")
            })
        }
    })
    
})

app.post("/login", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    try {
        const find = await User.findOne({ email: username });

        if(find){
            bcrypt.compare(password, find.password , function(err, result) {
                if (result == true) {
                    res.render("secrets")
                } else {
                    res.render("login" ,{err : "Wrong Credentials !! Try Again"})
                }
                
            });
        }
    } catch (error) {
        console.log(error)
    }
    
})


app.get("/logout" , function(req,res){
    res.render("home")
})

app.listen(3000,()=>{
    console.log("server listening on port 3000")
})