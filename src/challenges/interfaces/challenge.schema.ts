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
    dateTimeRequest: { type: Date },
    dateTimeResponse: { type: Date },
    status: { type: String },
    matchResult: [{ type: String }],
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
}, { timestamps: true, collection: 'challenges' });