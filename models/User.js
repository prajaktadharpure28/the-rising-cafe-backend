const mongoose=require("mongoose")
const {Schema,model} =mongoose

const UserSchema = new Schema({
    name: String,   
    email: String,
    phone: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    }
},
{ 
    timestamps: true
});

const User = model("User", UserSchema)

module.exports=User;

