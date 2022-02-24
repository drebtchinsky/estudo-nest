import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";
import { Event } from './../interfaces/event.interface'

export class CreateCategoryDto{

    @IsString()
    @IsNotEmpty()
    readonly category:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsArray()
    @ArrayNotEmpty()
    events:Array<Event>;
}