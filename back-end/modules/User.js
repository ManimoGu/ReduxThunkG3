const mongoose = require("mongoose")


const user = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    Prenom : {
        type : String,
        required : true
    },
    login : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true
    }
})
const UserModel = mongoose.model("users", user)

module.exports = UserModel