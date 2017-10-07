"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
class Navigation {
    static getRoute(map, gameInfo, target) {
        // find the next point to get to the target
        return new interfaces_1.Point(25, 27); // stub
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
}
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map