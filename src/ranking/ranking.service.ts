import { Injectable } from '@nestjs/common';
import { Ranking } from './interfaces/ranking.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoCommunicatorService } from 'src/common/services/mongo-communicator/mongo-communicator.service';

@Injectable()
export class RankingService extends MongoCommunicatorService<Ranking> {
    constructor(@InjectModel('Ranking') protected readonly model: Model<Ranking>) {
        super(model, RankingService.name);
    }
}
