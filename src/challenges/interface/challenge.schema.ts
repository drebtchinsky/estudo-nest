import * as mongoose from "mongoose";

export const ChallengeSchema = new mongoose.Schema({
    challenge: { type: String, unique: true },
    challenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
    challenged: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
}, { timestamps: true, collection: 'challenges' });