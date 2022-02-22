import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UpdatePlayerDto {

    @IsNotEmpty()
    readonly _id: string

    @IsNotEmpty()
    readonly cellPhone: string

    @IsEmail()
    readonly email: string

    @MinLength(5)
    readonly name: string
}