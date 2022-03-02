import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoCommunicatorService } from '../common/services/mongo-communicator/mongo-communicator.service';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService extends MongoCommunicatorService<Player>{
    constructor(@InjectModel('Player') protected readonly model: Model<Player>) {
        super(model, PlayersService.name);
    }

}
