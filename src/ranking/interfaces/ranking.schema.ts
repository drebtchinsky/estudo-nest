import * as mongoose from "mongoose";

export const RankingSchema = new mongoose.Schema({
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
    },
    match: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Match'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    event: { type: String },
    operation: { type: String },
    points: { type: Number }
}, { timestamps: true, collection: 'ranking' });