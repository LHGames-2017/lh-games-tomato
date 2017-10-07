import { GameInfo, Tile, Point, TileContent, IPlayer } from './interfaces';
import { AIHelper } from './aiHelper';

export class Navigation {
    public static getRoute(map: Tile[][], gameInfo: GameInfo): Point {
        // find the next point to get to the target
        let currentPosition = gameInfo.Player.Position;
        let newPosition = new Point(currentPosition.X - 1, currentPosition.Y);
        return newPosition; // stub
    }

    public static getRouteToPoint(map: Tile[][], gameInfo: GameInfo, target: Point): Array<Point> {
        const currentPosition = gameInfo.Player.Position;

        const up = new Point(currentPosition.X, currentPosition.Y + 1);
        const down = new Point(currentPosition.X, currentPosition.Y - 1);
        const left = new Point(currentPosition.X - 1, currentPosition.Y);
        const right = new Point(currentPosition.X + 1, currentPosition.Y);

        const upDist = currentPosition.Distance(up);
        const downDist = currentPosition.Distance(down);
        const leftDist = currentPosition.Distance(left);
        const rightDist = currentPosition.Distance(right);

        return pointsToNavigate;
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

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j].Content === TileContent.Resource) {
                    if (minDistance === 0) {
                        minDistPoint = map[i][j].Position;
                        minDistance = currentPosition.Distance(minDistPoint);
                    } else {
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

    public static getClosestPlayer(map: Tile[][], gameInfo: GameInfo): IPlayer {
        let closestPlayer: IPlayer = null;
        let minDistance = 0;
        const currentPosition: Point = gameInfo.Player.Position;

        if (gameInfo.OtherPlayers !== []) {
            for (let i = 0; i < gameInfo.OtherPlayers.length; i++) {
                if (minDistance === 0) {
                    minDistance = currentPosition.Distance(gameInfo.OtherPlayers[i].Position);
                    closestPlayer = gameInfo.OtherPlayers[i];
                } else {
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
