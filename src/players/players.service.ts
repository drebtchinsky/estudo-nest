import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Players } from './interfaces/players.interface';

@Injectable()
export class PlayersService {

    constructor(@InjectModel('Player') private readonly playerModel: Model<Players>) { }

    async createOrUpdate(createPlayerDto: CreatePlayerDto): Promise<Players> {
        const { email } = createPlayerDto;
        const playerFound = await this.findByEmail(email);
        if (playerFound) {
            return this.update(createPlayerDto);
        }
        return this.create(createPlayerDto);
    }

    async findByEmail(email: string): Promise<Players> {
        return this.playerModel.findOne({ email }).exec();
    }

    async findAll(): Promise<Players[]> {
        return this.playerModel.find().exec();
    }

    async deleteByEmail(email: string): Promise<any> {
        return this.playerModel.remove({ email }).exec();
    }

    private async create(createPlayerDto: CreatePlayerDto): Promise<Players> {
        const playerCreated = new this.playerModel(createPlayerDto);
        return playerCreated.save();
    }

    private async update(createPlayerDto: CreatePlayerDto): Promise<Players> {
        return this.playerModel.findOneAndUpdate({ email: createPlayerDto.email }, { $set: createPlayerDto }).exec();
    }
}
