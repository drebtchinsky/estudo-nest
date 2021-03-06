import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { PlayersModule } from './players/players.module';
import { ChallengesModule } from './challenges/challenges.module';
import { MatchesModule } from './matches/matches.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/smartranking'),
    PlayersModule,
    CategoriesModule,
    ChallengesModule,
    MatchesModule,
    RankingModule
  ]
})
export class AppModule { }
