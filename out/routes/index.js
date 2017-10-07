"use strict";
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
            const target = navigation_1.Navigation.getTarget(map, gameInfo);
            const nextPoint = navigation_1.Navigation.getRoute(map, gameInfo, target);
            return aiHelper_1.AIHelper.createMoveAction(nextPoint);
        }
        index(req, res, next) {
            const mapData = JSON.parse(req.body.map);
            console.log(req.body.map);
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