import mongoose from 'mongoose';

export function loadModel(modelName: string, modelSchema: any) {
    return mongoose.models[modelName] // Check if the model exists
        ? mongoose.model(modelName) // If true, only retrieve it
        : mongoose.model(modelName, modelSchema); // If false, define it;
}
