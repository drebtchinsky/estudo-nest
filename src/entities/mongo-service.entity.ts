
import { DeleteResult } from "mongodb";
import { Model } from 'mongoose';

export class MongoServiceEntity<T>{

    constructor(protected readonly model: Model<T>) { }

    async findById(_id: string): Promise<T> {
        return this.model.findById(_id).exec();
    }

    async findAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async deleteById(_id: string): Promise<DeleteResult> {
        return this.model.deleteOne({ _id }).exec();
    }

    async create(param: any): Promise<T> {
        return this.model.create(param);
    }

    async update(param: any): Promise<T> {
        return this.model.findByIdAndUpdate(param._id, { $set: param }).exec();
    }
}