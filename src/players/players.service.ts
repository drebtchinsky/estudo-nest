import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Players } from './interfaces/players.interface';

@Injectable()
export class PlayersService {

    private players: Players[] = [];

    async createOrUpdate(createPlayerDto: CreatePlayerDto): Promise<void> {
        const { email } = createPlayerDto;
        const playerFound = await this.findByEmail(email);
        if (playerFound) {
            return this.update(playerFound, createPlayerDto);
        }
        return this.create(createPlayerDto);
    }

    async findByEmail(email: string): Promise<Players> {
        return this.players.find(player => player.email === email);
    }

    async findAll(): Promise<Players[]> {
        return this.players;
    }

    async deleteByEmail(email: string): Promise<void> {
        const playerFound = await this.findByEmail(email);
        this.players = this.players.filter(player => player.email !== playerFound.email);
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

    private update(player: Players, createPlayerDto: CreatePlayerDto): void {
        const { name } = createPlayerDto;
        player.name = name;
    }
}
