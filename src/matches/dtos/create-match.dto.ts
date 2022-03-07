import { ArrayMinSize, IsNotEmpty } from "class-validator";
import { Player } from "./../../players/interfaces/player.interface";
import { Set } from './../interfaces/match.interface';

export class CreateMatchDto {

    @IsNotEmpty()
    @ArrayMinSize(1)
    readonly result: Array<Set>;

    readonly winner: Player;
}