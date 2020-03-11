const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    users: [{user_id:{ type: Schema.Types.ObjectId, ref: "User", required: true  }}]
});

BoardSchema.pre('save', function (next){
    let user = {user_id:this.owner}
    this.users.push(user);
    next();
})

module.exports = mongoose.model('Board',BoardSchema);