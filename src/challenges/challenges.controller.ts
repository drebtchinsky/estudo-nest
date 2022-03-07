import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeleteResult } from 'mongodb';
import { CategoriesService } from './../categories/categories.service';
import { Category } from './../categories/interfaces/category.interface';
import { Player } from './../players/interfaces/player.interface';
import { PlayersService } from './../players/players.service';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dtos/create-challenge.dto';
import { UpdateChallengeDto } from './dtos/update-challenge.dto';
import { Challenge } from './interfaces/challenge.interface';
import { StatusChallenge } from './interfaces/status-challenge.enum';

@Controller('api/v1/challenges')
export class ChallengesController {

    constructor(
        private challengesService: ChallengesService,
        private categoriesService: CategoriesService,
        private playersService: PlayersService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createChallenge(@Body() createChallengeDto: CreateChallengeDto): Promise<Challenge> {
        const { requested, requester, category } = createChallengeDto;
        if (requested._id === requester._id) {
            throw new BadRequestException(`jogadores não podem ser o mesmo`);
        }

        const _category = await this.testCategoryExists(category);

        const requestedPlayer = await this.testPlayerExists(requested);

        const requesterPlayer = await this.testPlayerExists(requester);

        return this.challengesService.create({
            requester: requesterPlayer,
            requested: requestedPlayer,
            category: _category,
            dateTimeRequest: new Date(),
            status: StatusChallenge.PENDING
        });
    }

    @Put()
    @UsePipes(ValidationPipe)
    async updateChallenge(@Body() updateChallengeDto: UpdateChallengeDto): Promise<Challenge> {
        const {
            _id,
            match,
            winner,
            status
        } = updateChallengeDto;

        if (!!winner) {
            await this.testPlayerExists(winner);
        }

        let dateTimeResponse;

        if (status === StatusChallenge.ACCEPTED ||
            status === StatusChallenge.DENIED) {
            dateTimeResponse = new Date();
        }

        return this.challengesService.update({
            _id,
            match,
            winner,
            status,
            dateTimeResponse
        });
    }

    @Get()
    async findChallenges(): Promise<Challenge[]> {
        return this.challengesService.findAll();
    }

    @Get(':id')
    async findChallengeById(@Param('id') _id: string): Promise<Challenge> {
        return this.challengesService.findById(_id);
    }

    @Delete(':id')
    async deleteChallenge(@Param('id') _id: string): Promise<DeleteResult> {
        return this.challengesService.deleteById(_id);
    }

    private async testPlayerExists(player: Player): Promise<Player> {
        const _player = await this.playersService.findById(player._id);
        if (!_player) {
            throw new BadRequestException(`jogador inválido`);
        }
        return _player;
    }

    private async testCategoryExists(category: Category): Promise<Category> {
        const _category = await this.categoriesService.findById(category._id);
        if (!_category) {
            throw new BadRequestException(`jogador inválido`);
        }
        return _category;
    }
}
