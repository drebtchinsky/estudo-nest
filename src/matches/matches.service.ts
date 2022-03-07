import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoCommunicatorService } from 'src/common/services/mongo-communicator/mongo-communicator.service';
import { Match } from './interfaces/match.interface';
import { Model } from 'mongoose';

@Injectable()
export class MatchesService extends MongoCommunicatorService<Match> {
    constructor(@InjectModel('Match') protected readonly model: Model<Match>) {
        super(model, MatchesService.name);
    }
}
