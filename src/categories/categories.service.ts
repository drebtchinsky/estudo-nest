import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoServiceEntity } from 'src/entities/mongo-service.entity';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoriesService extends MongoServiceEntity<Category> {
    constructor(@InjectModel('Category') protected readonly model: Model<Category>) {
        super(model);
    }

    async findOneByCategory(param: string): Promise<Category> {
        return this.model
            .findOne({ category: param })
            .exec();
    }
}
