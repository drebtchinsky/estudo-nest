import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationParametersPipe } from '../common/pipes/validation-parameters.pipe';
import { Player } from '../players/interfaces/player.interface';
import { PlayersService } from '../players/players.service';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { Category } from './interfaces/category.interface';

@Controller('api/v1/categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService, private playersService: PlayersService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { category } = createCategoryDto;
        const categoryFound = await this.categoriesService.findOneByCategory(category);
        if (categoryFound) {
            throw new BadRequestException(`categoria ${category} já cadastrada`)
        }
        return this.categoriesService.create(createCategoryDto);
    }

    @Put()
    async update(@Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return this.categoriesService.update(updateCategoryDto);
    }

    @Post(':category/player/:player')
    async setPlayerIntoCategory(@Param('category', ValidationParametersPipe) categoryId: string, @Param('player', ValidationParametersPipe) playerId: string): Promise<void> {
        const _category: Category = await this.categoriesService.findById(categoryId);

        const havePlayer: boolean = _category.players.find(player => player.id === playerId) ? true : false;
        if (havePlayer) {
            throw new BadRequestException(`categoria ${categoryId} já tem o jogador ${playerId} cadastrado`)
        }
        
        const _player: Player = await this.playersService.findById(playerId);
        if (!_player){
            throw new BadRequestException(`jogador ${playerId} não existe`)
        }
        _category.players.push(_player);

        await this.categoriesService.update(_category);
    }

    @Get()
    async findCategories(): Promise<Category[]> {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    async findCategoryById(@Param('id', ValidationParametersPipe) id: string): Promise<Category> {
        return this.categoriesService.findById(id);
    }

    @Delete(':id')
    async deleteCategory(@Param('id', ValidationParametersPipe) id: string): Promise<void> {
        await this.categoriesService.deleteById(id);
    }
}
