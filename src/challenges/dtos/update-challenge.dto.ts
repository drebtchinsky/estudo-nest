import { IsEnum, IsNotEmpty } from "class-validator";
import { StatusChallenge } from "../interfaces/status-challenge.enum";
import { Player } from '../../players/interfaces/player.interface';
import { Match } from "../../matches/interfaces/match.interface";


export class UpdateChallengeDto {

    @IsNotEmpty()
    readonly _id: string;

    @IsEnum(StatusChallenge)
    readonly status?: StatusChallenge;

    readonly match?: Match;

    readonly winner?: Player;
}