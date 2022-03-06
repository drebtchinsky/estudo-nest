import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoCommunicatorService } from './../common/services/mongo-communicator/mongo-communicator.service';
import { Challenge } from './interfaces/challenge.interface';

@Injectable()
export class ChallengesService extends MongoCommunicatorService<Challenge> {
    constructor(@InjectModel('Challenge') protected readonly model: Model<Challenge>) {
        super(model, ChallengesService.name);
    }

    async findById(_id: string): Promise<Challenge> {
        this.logger.log(`findById: ${_id}`);
        return this.model
            .findById(_id)
            .populate('requester')
            .populate('requested')
            .populate('category')
            .exec();
    }
}
