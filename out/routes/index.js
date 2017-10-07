"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const interfaces_1 = require("../interfaces");
const aiHelper_1 = require("../aiHelper");
const navigation_1 = require("../navigation");
var Route;
(function (Route) {
    class Index {
        static decompressMap(compressedMap) {
            const map = new Array();
            compressedMap = compressedMap.substring(2, compressedMap.length - 3);
            const row = compressedMap.split('],[');
            for (let i = 0; i < row.length; i++) {
                map[i] = new Array();
                const column = row[i].split('{');
                for (let j = 0; j < column.length - 1; j++) {
                    map[i][j] = {
                        Content: +(column[j + 1].split(',')[0]),
                        Position: new interfaces_1.Point(column[j + 1].split(',')[1], column[j + 1].split(',')[2].substring(0, column[j + 1].split(',')[2].length - 1))
                    };
                }
            }
            return map;
        }
        static getAction(map, gameInfo) {
            return __awaiter(this, void 0, void 0, function* () {
                let action = '';
                //const targetPoint = Navigation.getClosestRessource(map, gameInfo);
                const targetPoint = new interfaces_1.Point(26, 27);
                yield navigation_1.Navigation.getRouteToPoint(map, gameInfo, targetPoint).then((value) => {
                    console.log('next point ' + value);
                    action = aiHelper_1.AIHelper.createMoveAction(value);
                });
                return yield action;
            });
        }
        index(req, res, next) {
            const mapData = JSON.parse(req.body.map);
            console.log(req.body.map);
            const map = Index.decompressMap(mapData.CustomSerializedMap);
            Index.getAction(map, mapData).then((action) => {
                console.log(action);
                res.send(action);
            });
        }
        ping(req, res, next) {
            res.json({ success: true, test: false });
        }
    }
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
//# sourceMappingURL=index.js.map