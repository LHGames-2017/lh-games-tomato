import { GameInfo, Tile, Point } from './interfaces';

export class Navigation {
    public static getRoute(map: Tile[][], gameInfo: GameInfo, target: Point): Point {
        // find the next point to get to the target
        return new Point(25, 27); // stub
    }

    public static getTarget(map: Tile[][], gameInfo: GameInfo): Point {
        // find the closest ressource
        return new Point(25, 27); // stub
    }
}
