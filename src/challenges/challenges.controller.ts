import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationParametersPipe } from './../common/pipes/validation-parameters.pipe';
import { PlayersService } from './../players/players.service';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dtos/create-challenge.dto';
import { Challenge } from './interface/challenge.interface';
import { CategoriesService } from '../categories/categories.service';

@Controller('api/v1/challenges')
export class ChallengesController {
    constructor(
        private readonly challengesService: ChallengesService,
        private playersService: PlayersService,
        private categoriesService: CategoriesService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createChallengeDto: CreateChallengeDto): Promise<Challenge> {
        const { challenged, challenger } = createChallengeDto;
        if (challenged._id == challenger._id) {
            throw new BadRequestException(`jogador não pode se desafiar`);
        }
        const _challenged = await this.playersService.findById(challenged._id);
        const _challenger = await this.playersService.findById(challenger._id);

        if (!_challenged || !_challenger) {
            throw new BadRequestException(`jogador inválido`);
        }

        const categoryPlayer = await this.categoriesService.findByPlayer(challenger._id);

        if (!categoryPlayer) {
            throw new BadRequestException(`o desafiador precisa estar registrado em uma categoria`);
        }

        return this.challengesService.create({ 
            ...createChallengeDto, 
            category: categoryPlayer 
        });
    }

    @Put()
    @UsePipes(ValidationPipe)
    async update(@Body() params: any): Promise<any> {
        return this.challengesService.update(params);
    }

    @Get()
    async findPlayers(): Promise<any[]> {
        return this.challengesService.findAll();
    }

    @Get(':id')
    async findPlayerById(@Param('id', ValidationParametersPipe) id: string): Promise<any> {
        return this.challengesService.findById(id)
    }

    @Delete(':id')
    async deletePlayer(@Param('id', ValidationParametersPipe) id: string): Promise<void> {
        await this.challengesService.deleteById(id);
    }
}
