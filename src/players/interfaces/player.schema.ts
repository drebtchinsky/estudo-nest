import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
    cellPhone: String,
    email: { type: String, unique: true },
    name: String,
    ranking: String,
    rankingPosition: Number,
    urlPicture: String
}, { timestamps: true, collection: 'players' });