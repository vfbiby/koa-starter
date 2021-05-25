const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String, require: true },
});

export = model('User', UserSchema);
