import * as express from 'express';
import { GameInfo, Tile, Point } from '../interfaces';
import { AIHelper } from '../aiHelper';
import { Navigation } from '../navigation';

module Route {

    export class Index {
        private static decompressMap(compressedMap: any): Tile[][] {
            const map = new Array<Array<Tile>>();
            compressedMap = compressedMap.substring(2, compressedMap.length - 3);
            const row = compressedMap.split('],[');
            for (let i = 0; i < row.length; i++) {
                map[i] = new Array<Tile>();
                const column = row[i].split('{');
                for (let j = 0; j < column.length - 1; j++) {
                    map[i][j] = {
                        Content: +(column[j + 1].split(',')[0]),
                        Position: new Point(
                            column[j + 1].split(',')[1],
                            column[j + 1].split(',')[2].substring(0, column[j + 1].split(',')[2].length - 1)
                        )
                    };
                }
            }
            return map;
        }

        private static async getAction(map: Tile[][], gameInfo: GameInfo): Promise<string> {
            let action = '';
            //const targetPoint = Navigation.getClosestRessource(map, gameInfo);
            const targetPoint = new Point(26, 27);
            await Navigation.getRouteToPoint(map, gameInfo, targetPoint).then((value) => {
                console.log('next point ' + value.X + ' ' + value.Y);
                action = AIHelper.createMoveAction(value);
            });
            return await action;
        }

        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            const mapData = JSON.parse(req.body.map) as GameInfo;
            console.log(req.body.map);
            const map = Index.decompressMap(mapData.CustomSerializedMap);
            Index.getAction(map, mapData).then((action) => {
                console.log(action);
                res.send(action);
            });
        }

        public ping(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.json({ success: true, test: false });
        }
    }
}

export = Route;
