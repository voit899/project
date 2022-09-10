const { sendRes } = require("../helper/sendRes")
const User = require("../models/userModel")

module.exports.signup = async (req, res) =>{
    try {
        const {username, email, password,adress}= req.body
        const user = await User.findOne({username, email, password,adress})
        sendRes(res,user,201)
    } catch (err) {
        sendRes(res,err,400,true)
    }
}