import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { }

    @Post()
    async createOrUpdate(@Body() params: CreatePlayerDto) {
        this.playersService.createOrUpdate(params);
        return this.playersService.findAll();
    }
}
