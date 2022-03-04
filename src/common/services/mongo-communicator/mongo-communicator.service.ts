import { Injectable, Logger } from '@nestjs/common';
import { DeleteResult } from "mongodb";
import { Model } from 'mongoose';

@Injectable()
export class MongoCommunicatorService<T> {
    protected readonly logger = new Logger(this.serviceName);


    constructor(protected readonly model: Model<T>,private readonly serviceName:string) { }

    async findById(_id: string): Promise<T> {
        this.logger.log(`findById: ${_id}`);
        return this.model.findById(_id).exec();
    }

    async findAll(): Promise<T[]> {
        this.logger.log('findAll');
        return this.model.find().exec();
    }

    async deleteById(_id: string): Promise<DeleteResult> {
        this.logger.log(`deleteById: ${_id}`);
        return this.model.deleteOne({ _id }).exec();
    }

    async create(param: any): Promise<T> {
        this.logger.log(`create: ${JSON.stringify(param)}`);
        return this.model.create(param);
    }

    async update(param: any): Promise<T> {
        this.logger.log(`update:  ${JSON.stringify(param)}`);
        return this.model.findByIdAndUpdate(param._id, { $set: param }).exec();
    }
}
