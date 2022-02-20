import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Players } from './interfaces/players.interface';

@Injectable()
export class PlayersService {

    private players: Players[] = [];

    private readonly logger = new Logger(PlayersService.name);

    async createOrUpdate(createPlayerDto: CreatePlayerDto): Promise<void> {
        this.logger.log(`createPlayerDto: ${createPlayerDto}`);
        this.create(createPlayerDto);
    }

    async findAll(): Promise<Players[]> {
        return this.players;
    }

    private create(createPlayerDto: CreatePlayerDto): void {
        const { name, email, cellPhone } = createPlayerDto;
        const player: Players = {
            _id: randomUUID(),
            name,
            email,
            cellPhone,
            ranking: "A",
            rankingPosition: 1,
            urlPicture: ''
        }
        this.players.push(player);
    }
}
