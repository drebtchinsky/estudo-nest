import { IsEnum, IsNotEmpty } from "class-validator";
import { Category } from "src/categories/interfaces/category.interface";
import { Challenge } from "src/challenges/interfaces/challenge.interface";
import { Match } from "src/matches/interfaces/match.interface";
import { Player } from "src/players/interfaces/player.interface";
import { EventRanking } from "../interfaces/event-ranking.enum";
import { OperationRanking } from "../interfaces/operation-ranking.enum";

export class UpdateRankingDto {

    @IsNotEmpty()
    readonly _id: string;

    readonly challenge?: Challenge;

    readonly match?: Match;

    readonly category?: Category;

    readonly player?: Player;

    @IsEnum(EventRanking)
    readonly event?: EventRanking;

    @IsEnum(OperationRanking)
    readonly operation?: OperationRanking;

    readonly points?: number;
}