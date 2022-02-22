import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreatePlayerDto{
    
    @IsNotEmpty()
    readonly cellPhone:string
    
    @IsEmail()
    readonly email:string
    
    @MinLength(5)
    readonly name:string
}