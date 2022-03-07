import { IsEnum, IsNotEmpty } from "class-validator";
import { Category } from "src/categories/interfaces/category.interface";
import { Challenge } from "src/challenges/interfaces/challenge.interface";
import { Match } from "src/matches/interfaces/match.interface";
import { Player } from "src/players/interfaces/player.interface";
import { EventRanking } from "../interfaces/event-ranking.enum";
import { OperationRanking } from "../interfaces/operation-ranking.enum";

export class CreateRankingDto {

    @IsNotEmpty()
    readonly challenge: Challenge;

    @IsNotEmpty()
    readonly match: Match;

    @IsNotEmpty()
    readonly category: Category;

    @IsNotEmpty()
    readonly player: Player;

    @IsNotEmpty()
    @IsEnum(EventRanking)
    readonly event: EventRanking;

    @IsNotEmpty()
    @IsEnum(OperationRanking)
    readonly operation: OperationRanking;

    @IsNotEmpty()
    readonly points: number;
}