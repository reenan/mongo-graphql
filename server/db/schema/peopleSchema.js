import { Schema, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose/es';

const peopleSchema = Schema({
    name: String,
    age: Number
})

const peopleModel = model('People', peopleSchema);

const customizationOptions = {}; // left it empty for simplicity, described below
export default composeWithMongoose(peopleModel, customizationOptions);

