import { IsDateString, IsNotEmpty } from "class-validator";
import { Player } from '../../../dist/players/interfaces/player.interface';
import { Category } from '../../../dist/categories/interfaces/category.interface';

export class CreateChallengeDto {
    @IsNotEmpty()
    @IsDateString()
    dateTimeChallenge: Date;

    @IsNotEmpty()
    challenger: Player

    @IsNotEmpty()
    challenged: Player
}