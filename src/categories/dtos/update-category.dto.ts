import { IsNotEmpty } from "class-validator";
import { Event } from './../interfaces/event.interface';

export class UpdateCategoryDto {

    @IsNotEmpty()
    readonly _id: string;

    readonly category?: string;

    description?: string;

    events?: Array<Event>;
}