import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { Category } from './interfaces/category.interface';

@Controller('api/v1/categories')
export class CategoriesController {

    constructor(private service: CategoriesService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { category } = createCategoryDto;
        const categoryFound = await this.service.findOneByCategory(category);
        if(categoryFound){
            throw new BadRequestException(`categoria ${category} já cadastrada`)
        }
        return this.service.create(createCategoryDto);
    }

    @Put()
    async update(@Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return this.service.update(updateCategoryDto);
    }

    @Get()
    async findPlayers(): Promise<Category[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findPlayerById(@Param('id') id: string): Promise<Category> {
        return this.service.findById(id)
    }

    @Delete(':id')
    async deletePlayer(@Param('id') id: string): Promise<void> {
        await this.service.deleteById(id);
    }
}
