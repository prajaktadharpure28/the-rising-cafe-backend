// import { Schema, model } from "mongoose";

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

import mongoose, { Schema } from 'mongoose';

const tableSchema = mongoose.Schema({
  tableNumber: Number,
  occupied: Boolean,
  occupiedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Table = mongoose.model('Table', tableSchema);

export default Table;
