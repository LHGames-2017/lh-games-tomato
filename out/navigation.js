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
        return new interfaces_1.Point(25, 27);
    }
}
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map