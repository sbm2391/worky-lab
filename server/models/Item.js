const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
  title         : { type: String },
  body          : { type: String },
  state       : { type: String, enum: ['public', 'draft'], default: "draft" }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
}
});


const Item = mongoose.model("Item", itemSchema);
module.exports = Item; 