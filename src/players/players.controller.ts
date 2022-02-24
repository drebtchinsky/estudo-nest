import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { UpdatePlayerDto } from './dtos/update-player.dto';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
    constructor(private readonly service: PlayersService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() params: CreatePlayerDto): Promise<Player> {
        return this.service.create(params);
    }

    @Put()
    @UsePipes(ValidationPipe)
    async update(@Body() params: UpdatePlayerDto): Promise<Player> {
        return this.service.update(params);
    }

    @Get()
    async findPlayers(): Promise<Player[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findPlayerById(@Param('id') id: string): Promise<Player> {
        return this.service.findById(id)
    }

    @Delete(':id')
    async deletePlayer(@Param('id') id: string):Promise<void> {
        await this.service.deleteById(id);
    }
}
