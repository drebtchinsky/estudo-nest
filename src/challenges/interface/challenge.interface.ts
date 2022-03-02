import { ChallengeStatus } from "./challenge-status.enum";
import { Player } from '../../../dist/players/interfaces/player.interface';

export interface Challenge extends Document {
    dateTimeChallenge:Date,
    status:ChallengeStatus,
    dateTimeRequest:Date
    dateTimeResponse:Date
    challenger: Player
    challenged: Player
    category:string,
    match:any

}

export interface Match extends Document{
    category: string,
    players:Array<Player>,
    def:Player
    results:Array<Result>
}

export interface Result {
    set: string
}
