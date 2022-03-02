import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoCommunicatorService } from './../common/services/mongo-communicator/mongo-communicator.service';
import { ChallengeStatus } from './interface/challenge-status.enum';
import { Challenge } from './interface/challenge.interface';

@Injectable()
export class ChallengesService extends MongoCommunicatorService<Challenge>{
    constructor(@InjectModel('Player') protected readonly model: Model<Challenge>) {
        super(model, ChallengesService.name);
    }

    async create(param: any): Promise<Challenge> {
        const challengeCreated = new this.model(param);
        
        challengeCreated.dateTimeRequest = new Date();
        challengeCreated.status = ChallengeStatus.PENDING;
        
        this.logger.log(`create: ${JSON.stringify(challengeCreated)}`);
        
        return challengeCreated.save();
    }

}
