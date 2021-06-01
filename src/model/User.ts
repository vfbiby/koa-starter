import mongoose from 'mongoose';
import { loadModel } from './utils';

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, require: true },
});

export = loadModel('User', UserSchema);
