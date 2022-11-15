const {Router} = require("express")
const UserModel = require("../modules/User")

const router = Router()

router.post("/signup", async (req,res) =>{

let user = req.body
 
try{
 let result = await UserModel.findOne({login : user.login})

   if(result){
       res.send("user already exists")
   }else{

    const newUser = new UserModel(user)
    const saved = await newUser.save()
    if(saved) res.send("user inserted")
    else res.send("not inserted")

   }

}catch(err){console.log(err.message)} 

})



module.exports = router