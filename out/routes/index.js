"use strict";
const interfaces_1 = require("../interfaces");
const aiHelper_1 = require("../aiHelper");
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
        static getRoute(map, gameInfo, target) {
            // find the next point to get to the target
            return new interfaces_1.Point(25, 27); // stub
        }
        static getTarget(map, gameInfo) {
            // find the closest ressource
            return new interfaces_1.Point(25, 27); // stub
        }
        static getAction(map, gameInfo) {
            return aiHelper_1.AIHelper.createMoveAction(new interfaces_1.Point(26, 27));
        }
        index(req, res, next) {
            const mapData = JSON.parse(req.body.map);
            console.log(mapData);
            const map = Index.decompressMap(mapData.CustomSerializedMap);
            let action = Index.getAction(map, mapData);
            res.send(action);
        }
        ping(req, res, next) {
            res.json({ success: true, test: false });
        }
    }
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
//# sourceMappingURL=index.js.map