import { Player } from "src/players/interfaces/player.interface";
import { Document } from 'mongoose';

export interface Match extends Document {
    result: Array<Set>;
    winner?: Player;
}

export interface Set {
    set: string;
}