import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from '../categories/categories.module';
import { PlayersModule } from '../players/players.module';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { ChallengeSchema } from './interfaces/challenge.schema';

@Module({
  imports: [
    PlayersModule, 
    CategoriesModule,
    MongooseModule.forFeature([{ name: 'Challenge', schema: ChallengeSchema }])
  ],
  controllers: [ChallengesController],
  providers: [ChallengesService]
})
export class ChallengesModule { }
