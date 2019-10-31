const User = require("../models/user");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../configuration");

signWithToken = (user) => {
    return  JWT.sign({
        iss: '',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 6)
    }, JWT_SECRET)
}

async function signUp(req, res, next){
    const { email, password, username, photoUrl } = req.body;

    const foundUser = await User.findOne({ email });
    if (foundUser) {
        return res.status(403).json({ error: 'A user with such email already exsits!' });
    }

    const newUser = new User({ email, password, username, photoUrl });
    await newUser.save();

    
    //get token
    const token = signWithToken(newUser);

    //send token
    res.status(200).json({ token })
}

function signIn(req, res, next){
    const token = signWithToken(req.user);

    res.status(200).json({ token });

    console.log("successful login!");
}

 function getInfo(req, res, next){
    console.log(req.user);

    const { username, email, photoUrl } = req.user;
    res.json({ username, email, photoUrl });
}

module.exports = {signIn, signUp, getInfo};