const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt')
const SALT_I=10;
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;



const alumniSchema=mongoose.Schema({
      name:{
        required:true,
        type:String
    },
    content:{
       type:String
    },
    date:{
    type:String
    },
    images:{
        type:Array,

    }
   
})


alumniSchema.pre('save',function(next){
    var user=this;
    if(user.isModified("password")){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err)
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err)
                user.password = hash;
                console.log(hash)
                
                next()
            })

        })
    }
    else {
        next()
    }
})

alumniSchema.methods.comparepassword=function(candidatepassword,cb){
    bcrypt.compare(candidatepassword,this.password,function(err,isMatch){
        if(err) return cb(err)
        cb(null,isMatch)
    })
}

alumniSchema.methods.generateToken=function(cb){
    var user=this;
    var token=jwt.sign(user._id.toHexString(),process.env.PASS)
    user.token=token
    user.save(function(err,user){
        if(err) return cb(err,null)
        cb(null,user)
    })
}

alumniSchema.statics.findByToken=function(token,cb){
    var user=this;
    jwt.verify(token,process.env.PASS,function(err,decode){
      user.findOne({"_id":decode,"token":token},(err,user)=>{
          if(err) return cb(err);
          return cb(null,user);
      })
    })
}

const Alumni=mongoose.model('Alumni',alumniSchema)


module.exports={Alumni}