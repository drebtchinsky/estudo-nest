import * as mongoose from "mongoose";

export const MatchSchema = new mongoose.Schema({
    result: [
        { set: { type: String } }
    ],
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
}, { timestamps: true, collection: 'matches' });