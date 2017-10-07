"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(map, gameInfo) {
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
    isFullCapacity() {
        return this.CarriedResources + 100 >= this.CarryingCapacity;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map