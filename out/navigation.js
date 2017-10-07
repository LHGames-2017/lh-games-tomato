"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const easystarjs = require("easystarjs");
class Navigation {
    static getRoute(map, gameInfo) {
        // find the next point to get to the target
        let currentPosition = gameInfo.Player.Position;
        let newPosition = new interfaces_1.Point(currentPosition.X - 1, currentPosition.Y);
        return newPosition; // stub
    }
    static getRouteToPoint(map, gameInfo, target) {
        const astar = new easystarjs.js();
        const pathMap = map.map((line) => {
            return line.map((tile) => {
                return tile.Content === interfaces_1.TileContent.Empty ? 1 : 0;
            });
        });
        //console.log(pathMap);
        astar.setGrid(pathMap);
        astar.disableCornerCutting();
        astar.setAcceptableTiles([1]);
        astar.findPath(gameInfo.Player.Position.X, gameInfo.Player.Position.Y, target.X, target.Y, (path) => {
            console.log(path);
        });
        astar.calculate();
    }
    static getTarget(map, gameInfo) {
        return new interfaces_1.Point(25, 27); // stub
    }
    static getClosestRessource(map, gameInfo) {
        // find the closest ressource
        const resources = [];
        const currentPosition = gameInfo.Player.Position;
        let minDistPoint;
        let minDistance = 0;
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j].Content === interfaces_1.TileContent.Resource) {
                    if (minDistance === 0) {
                        minDistPoint = map[i][j].Position;
                        minDistance = currentPosition.Distance(minDistPoint);
                    }
                    else {
                        if (currentPosition.Distance(map[i][j].Position) < minDistance) {
                            minDistance = currentPosition.Distance(resources[i]);
                            minDistPoint = map[i][j].Position;
                        }
                    }
                }
            }
        }
        return minDistPoint;
    }
    static getClosestPlayer(map, gameInfo) {
        let closestPlayer = null;
        let minDistance = 0;
        const currentPosition = gameInfo.Player.Position;
        if (gameInfo.OtherPlayers !== []) {
            for (let i = 0; i < gameInfo.OtherPlayers.length; i++) {
                if (minDistance === 0) {
                    minDistance = currentPosition.Distance(gameInfo.OtherPlayers[i].Position);
                    closestPlayer = gameInfo.OtherPlayers[i];
                }
                else {
                    if (currentPosition.Distance(gameInfo.OtherPlayers[i].Position) < minDistance) {
                        minDistance = currentPosition.Distance(gameInfo.OtherPlayers[i].Position);
                        closestPlayer = gameInfo.OtherPlayers[i];
                    }
                }
            }
        }
        return closestPlayer;
    }
}
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map