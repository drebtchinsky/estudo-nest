import * as mongoose from "mongoose";

export const ChallengeSchema = new mongoose.Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
    requested: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    match: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match"
    },
    dateTimeRequest: { type: Date },
    dateTimeResponse: { type: Date }
}, { timestamps: true, collection: 'challenges' });