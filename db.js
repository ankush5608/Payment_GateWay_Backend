const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId;
require("dotenv").config();
const DB_URL = process.env.MONGO_DB_URL;
mongoose.connect(
  
     DB_URL
);

const Userschema = mongoose.Schema({
  username: {
    type: String,
    trim: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },

  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },

  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 20,
  }

});

const accountschema=mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
  },
  balance:{
    type:Number,
    required:true
}
})

const user = mongoose.model("User", Userschema);
const account=mongoose.model("Account",accountschema)

module.exports = {
  user,
  account
};
