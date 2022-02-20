import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Players } from './interfaces/players.interface';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { }

    @Post()
    async createOrUpdate(@Body() params: CreatePlayerDto) {
        await this.playersService.createOrUpdate(params);
    }

    @Get()
    async findPlayers(): Promise<Players[]> {
        return this.playersService.findAll();
    }

    @Get(':email')
    async findPlayer(@Param('email') email: string): Promise<Players> {
        return this.playersService.findByEmail(email);
    }

    @Delete(':email')
    async deletePlayer(@Param('email') email: string) {
        await this.playersService.deleteByEmail(email);
    }
}
