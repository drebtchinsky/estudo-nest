import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from "mongodb";
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Players } from './interfaces/players.interface';
import { UpdatePlayerDto } from './dtos/update-player.dto';

@Injectable()
export class PlayersService {

    constructor(@InjectModel('Player') private readonly playerModel: Model<Players>) { }

    async findById(id: string): Promise<Players> {
        return this.playerModel.findOne({ id }).exec();
    }

    async findAll(): Promise<Players[]> {
        return this.playerModel.find().exec();
    }

    async deleteById(_id: string): Promise<DeleteResult> {
        return this.playerModel.deleteOne({ _id }).exec();
    }

    async create(createPlayerDto: CreatePlayerDto): Promise<Players> {
        return this.playerModel.create(createPlayerDto);
    }

    async update(updatePlayerDto: UpdatePlayerDto): Promise<Players> {
        return this.playerModel.findByIdAndUpdate(updatePlayerDto._id, { $set: updatePlayerDto }).exec();
    }
}
