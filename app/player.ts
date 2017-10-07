import { GameInfo, Tile, Point, IPlayer } from './interfaces';

export class Player implements IPlayer {
    public Name: string;
    public AttackPower: number;
    public CarriedResources: number;
    public CarryingCapacity: number;
    public Defence: number;
    public Health: number;
    public MaxHealth: number;
    public Score: number;
    public TotalResources: number;
    public Position: Point;
    public HouseLocation: Point;

    constructor(map: Tile[][], gameInfo: GameInfo) {
        this.Name = gameInfo.Player.Name;
        this.AttackPower = gameInfo.Player.AttackPower;
        this.CarriedResources = gameInfo.Player.CarriedResources;
        this.CarryingCapacity = gameInfo.Player.CarryingCapacity;
        this.Defence = gameInfo.Player.Defence;
        this.Health = gameInfo.Player.Health;
        this.MaxHealth = gameInfo.Player.MaxHealth;
        this.Score = gameInfo.Player.Score;
        this.TotalResources = gameInfo.Player.TotalResources;
        this.Position = gameInfo.Player.Position;
        this.HouseLocation = gameInfo.Player.HouseLocation;
    }

    public isFullCapacity(): boolean {
        return this.CarriedResources + 100 >= this.CarryingCapacity;
    }
}
