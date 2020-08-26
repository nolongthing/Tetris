import { IPoint } from "./type";
import { initPointList } from "./GameConf";

export class Game {
  private _pointList: readonly IPoint[] = initPointList

  get pointList() {
    return this._pointList;
  }
}