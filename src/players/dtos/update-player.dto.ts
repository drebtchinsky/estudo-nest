import { IsNotEmpty } from 'class-validator';

export class UpdatePlayerDto{

    @IsNotEmpty()
    readonly _id: string;
    readonly name?: string;
}