import { Document } from 'mongoose';

export interface Player extends Document {
    readonly cellPhone: string;
    readonly email: string;
    name: string;
    ranking: string;
    rankingPosition: number;
    urlPicture: string
}
