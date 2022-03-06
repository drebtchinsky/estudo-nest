import { Document } from 'mongoose';
import { Category } from './../../categories/interfaces/category.interface';
import { Player } from './../../players/interfaces/player.interface';
import { StatusChallenge } from './status-challenge.enum';

export interface Challenge extends Document {
    requester: Player;
    requested: Player;
    category: Category;
    dateTimeRequest: Date;
    dateTimeResponse?: Date;
    status: StatusChallenge;
    matchResult: Array<string>;
    winner?: Player;
}