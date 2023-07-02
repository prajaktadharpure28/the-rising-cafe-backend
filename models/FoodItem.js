const mongoose=require("mongoose")
const {Schema,model} =mongoose
const foodItemSchema = new Schema({
    title: String,
    description: String,
    imgUrl: String,
    price: Number,
    category: String
});

const FoodItem = model("FoodItem", foodItemSchema);
module.exports=FoodItem
