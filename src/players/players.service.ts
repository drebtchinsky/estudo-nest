import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoServiceEntity } from 'src/entities/mongo-service.entity';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService extends MongoServiceEntity<Player>{
    constructor(@InjectModel('Player') protected readonly model: Model<Player>) {
        super(model);
    }

}
