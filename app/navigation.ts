import { GameInfo, Tile, Point, TileContent } from './interfaces';

export class Navigation {
    public static getRoute(map: Tile[][], gameInfo: GameInfo, target: Point): Point {
        // find the next point to get to the target
        return new Point(25, 27); // stub
    }

    public static getTarget(map: Tile[][], gameInfo: GameInfo): Point {
        return new Point(25, 27); // stub
    }

    public static getClosestRessource(map: Tile[][], gameInfo: GameInfo): Point {
        // find the closest ressource
        const resources: Array<Point> = [];
        const currentPosition: Point = gameInfo.Player.Position;
        let minDistPoint: Point;
        let minDistance = 0;

        for (let i = 0; i <  map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j].Content === TileContent.Resource) {
                    if (minDistance === 0) {
                        minDistPoint = map[i][j].Position;
                        minDistance =  currentPosition.Distance(minDistPoint);
                    } else {
                        if(currentPosition.Distance(map[i][j].Position) < minDistance) {
                            minDistance = currentPosition.Distance(resources[i]);
                            minDistPoint = map[i][j].Position;
                        }
                    }
                }
            }
        }

        return minDistPoint;
    }

    public static getClosestPlayer(map: Tile[][], gameInfo: GameInfo): Point {
        return new Point(25, 27);
    }
}
