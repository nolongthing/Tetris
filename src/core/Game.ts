import { IPoint } from "./type";
import { initPointList } from "./GameConf";
import { Piece } from "./Piece";
import { PiecesList } from "./Pieces";
import { PiecePageViewer } from "viewer/PiecePageViewer";

export class Game {
  private _pointList: IPoint[] = initPointList
  private _selected?: Piece
  private _pieceList?: Piece[]

  constructor() {
    this.initFun();
  }

  initFun() {
    this._pieceList = initPointList.map((item) => {
      return new PiecesList[item.index](item.camp, { x: item.x, y: item.y }, new PiecePageViewer());
    })
  }

  get pointList() {
    return this._pointList;
  }
}