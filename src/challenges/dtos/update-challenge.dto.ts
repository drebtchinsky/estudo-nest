import { IsEnum, IsNotEmpty } from "class-validator";
import { StatusChallenge } from "../interfaces/status-challenge.enum";
import { Player } from '../../players/interfaces/player.interface';


export class UpdateChallengeDto {

    @IsNotEmpty()
    readonly _id: string;

    @IsEnum(StatusChallenge)
    readonly status?: StatusChallenge;

    readonly matchResult?: Array<string>;

    readonly winner?: Player;
}