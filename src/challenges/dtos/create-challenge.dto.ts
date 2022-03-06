import { IsNotEmpty } from "class-validator";
import { Category } from "../../categories/interfaces/category.interface";
import { Player } from '../../players/interfaces/player.interface';

export class CreateChallengeDto {

    @IsNotEmpty()
    readonly requester: Player;

    @IsNotEmpty()
    readonly requested: Player;

    @IsNotEmpty()
    readonly category: Category;
}