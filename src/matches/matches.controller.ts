import { Body, Controller, Post, Put, UsePipes, ValidationPipe, Get, Param, Delete } from '@nestjs/common';
import { CreateMatchDto } from './dtos/create-match.dto';
import { UpdateMatchDto } from './dtos/update-match.dto';
import { Match } from './interfaces/match.interface';
import { MatchesService } from './matches.service';
import { DeleteResult } from 'mongodb';

@Controller('api/v1/matches')
export class MatchesController {

    constructor(
        private matchesService: MatchesService,
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createMatch(@Body() createMatchDto: CreateMatchDto): Promise<Match> {
        return this.matchesService.create(createMatchDto);
    }

    @Put()
    @UsePipes(ValidationPipe)
    async updateMatch(@Body() updateMatchDto: UpdateMatchDto): Promise<Match> {
        return this.matchesService.update(updateMatchDto);
    }

    @Get()
    async findAllMatches(): Promise<Match[]> {
        return this.matchesService.findAll();
    }

    @Get(':id')
    async findMatchById(@Param('id') id: string): Promise<Match> {
        return this.matchesService.findById(id);
    }

    @Delete(':id')
    async deleteMatchById(@Param('id') id: string): Promise<DeleteResult> {
        return this.matchesService.deleteById(id);
    }
}
