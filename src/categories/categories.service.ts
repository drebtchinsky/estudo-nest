import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoCommunicatorService } from '../common/services/mongo-communicator/mongo-communicator.service';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoriesService extends MongoCommunicatorService<Category> {
    constructor(@InjectModel('Category') protected readonly model: Model<Category>) {
        super(model);
    }

    async findOneByCategory(param: string): Promise<Category> {
        return this.model
            .findOne({ category: param })
            .exec();
    }

    async findById(_id: string): Promise<Category> {
        return this.model.findById(_id).populate('players').exec();
    }
}
