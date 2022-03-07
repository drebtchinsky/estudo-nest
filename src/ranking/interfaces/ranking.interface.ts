import { Document } from 'mongoose';
import { Category } from "src/categories/interfaces/category.interface";
import { Match } from 'src/matches/interfaces/match.interface';
import { Player } from '../../../dist/players/interfaces/player.interface';
import { Challenge } from '../../challenges/interfaces/challenge.interface';
import { EventRanking } from './event-ranking.enum';
import { OperationRanking } from './operation-ranking.enum';

export interface Ranking extends Document {
    challenge: Challenge;
    match: Match;
    category: Category;
    player: Player;
    event: EventRanking;
    operation: OperationRanking;
    points: number;
}