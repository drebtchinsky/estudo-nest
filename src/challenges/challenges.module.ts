import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './../players/players.module';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { ChallengeSchema } from './interface/challenge.schema';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [PlayersModule,CategoriesModule, MongooseModule.forFeature([{ name: 'Challenge', schema: ChallengeSchema }])],
  controllers: [ChallengesController],
  providers: [ChallengesService]
})
export class ChallengesModule {}
