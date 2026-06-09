const mongoose=require("mongoose");

const TwitterShecma=new mongoose.Schema({
    profilePic:String,
    fullName:String,
    userName:String,
    bio:String,
    companyName:String,
    city:String,
    protfolioLink:String,
    handle:String,
    followerCount:Number,
    followingCount:Number,
    isOnline:Boolean,
});

const Twitter=mongoose.model("Twitter",TwitterShecma);

module.exports=Twitter;