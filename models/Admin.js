
const mongoose=require("mongoose")
const {Schema,model} =mongoose
const AdminSchema = new Schema({
    name: {
        type: String,
        required: [
            true,
            'Name is required'
        ]
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        unique: true,
    },
    phone: {
        type: String,
        required: [
            true,
            'Phone is required'
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [
            true,
            'Password is required'
        ]
    },
    role: {
        type: String,
        default: 'admin'
    }
},
{
    timestamps: true
});

const Admin = model("Admin", AdminSchema)

module.exports=Admin