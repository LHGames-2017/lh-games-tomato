"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            let nextPoint = new interfaces_1.Point(gameInfo.Player.Position.X, gameInfo.Player.Position.Y);
            const astar = new easystarjs.js();
            astar.enableDiagonals();
            const pathMap = map.map((line) => {
                return line.map((tile) => {
                    return tile.Content === interfaces_1.TileContent.Empty ? 1 : 0;
                });
            });
            //astar.setIterationsPerCalculation(1000);
            astar.setGrid(pathMap);
            console.log(pathMap);
            astar.disableCornerCutting();
            astar.setAcceptableTiles([1]);
            yield astar.findPath(gameInfo.Player.Position.X - 20, gameInfo.Player.Position.Y - 20, target.X - 20, target.Y - 20, (path) => {
                if (path === null) {
                    console.log('Path was not found.');
                }
                else {
                    console.log(path);
                    console.log('Path was found. The first Point is ' + (path[1].x + 20) + ' ' + (path[1].y + 20));
                    nextPoint = new interfaces_1.Point(path[1].x + 20, path[1].y + 20);
                }
            });
            astar.calculate();
            return yield nextPoint;
        });
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