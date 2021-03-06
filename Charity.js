var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.connect(process.env.DB);

//Charity Schema
var CharitySchema = new Schema({
    Name: { type: String, require: true, unique: true},
    Amount: { type: Number, required: true }
});

CharitySchema.pre('save', function(next) {
    var charity = this;
    next();
});

module.exports = mongoose.model('Charity', CharitySchema);
