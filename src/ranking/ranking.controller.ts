import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeleteResult } from 'mongodb';
import { CreateRankingDto } from './dtos/create-ranking.dto';
import { UpdateRankingDto } from './dtos/update-ranking.dto';
import { Ranking } from './interfaces/ranking.interface';
import { RankingService } from './ranking.service';

@Controller('api/v1/ranking')
export class RankingController {


    constructor(
        private rankingService: RankingService,
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createRanking(@Body() createRankingDto: CreateRankingDto): Promise<Ranking> {
        return this.rankingService.create(createRankingDto);
    }

    @Put()
    @UsePipes(ValidationPipe)
    async updateRanking(@Body() updateRankingDto: UpdateRankingDto): Promise<Ranking> {
        return this.rankingService.update(updateRankingDto);
    }

    @Get()
    async findAllRanking(): Promise<Ranking[]> {
        return this.rankingService.findAll();
    }

    @Get(':id')
    async findRankingById(@Param('id') id: string): Promise<Ranking> {
        return this.rankingService.findById(id);
    }

    @Delete(':id')
    async deleteRankingById(@Param('id') id: string): Promise<DeleteResult> {
        return this.rankingService.deleteById(id);
    }
}
