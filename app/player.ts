import { GameInfo, Tile, Point, IPlayer } from './interfaces';

export class Player implements IPlayer {
    Name: string;
    AttackPower: number;
    CarriedResources: number;
    CarryingCapacity: number;
    Defence: number;
    Health: number;
    MaxHealth: number;
    Score: number;
    TotalResources: number;
    Position: Point;
    HouseLocation: Point;

    constructor(map: Tile[][], gameInfo: GameInfo) {
        this.Name = gameInfo.Player.Name;
        this.AttackPower = gameInfo.Player.AttackPower;
    }
}