//const mongoose=require("mongoose")
//const {Schema,model} =mongoose

// const tableSchema = new Schema({
//   tableNumber: {
//     type: Number,
//     required: [true, 'tablenumber cannot be empty'],
//     unique: true,
//   },
//   capacity: {
//     type: Number,
//   },
//   occupied: {
//     type: Boolean,
//   },
//   occupiedBy: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   tableLocation: String,
//   tableService: {
//     type: String,
//   },
// },
// {
//   timestamps: true,
// })

// const Table = model('Table', tableSchema);

// export default Table;

const mongoose=require("mongoose")
const {Schema,model} =mongoose

const tableSchema = new Schema({
  tableNumber: Number,
  occupied: Boolean,
  occupiedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Table = model('Table', tableSchema);

module.exports=Table;
