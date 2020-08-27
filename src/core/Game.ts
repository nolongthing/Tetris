import { IPoint, PieceCamp } from "./type";
import { initPointList } from "./GameConf";
import { Piece } from "./Piece";
import { PiecesList } from "./Pieces";
import { PiecePageViewer } from "viewer/PiecePageViewer";
import { GamePageViewer } from "viewer/GamePageViewer";

export class Game {
  private _pointList: IPoint[] = initPointList
  private _selected?: Piece
  private _pieceList?: Piece[]
  private _curPlayer?: PieceCamp = PieceCamp.Red
  constructor(
  ) {
    this.initFun();
  }

  private initFun() {
    this._pieceList = initPointList.map((item) => {
      return new PiecesList[item.index](item.camp, { x: item.x, y: item.y }, new PiecePageViewer());
    })
  }
  get selected() {
    return this._selected;
  }
  set selected(val) {
    this._selected = val;
  }

  get pieceList() {
    return this._pieceList;
  }
  set pieceList(val) {
    this._pieceList = val;
  }

  get curPlayer() {
    return this._curPlayer;
  }
  set curPlayer(val) {
    this._curPlayer = val;
  }

  get pointList() {
    return this._pointList;
  }

  set pointList(val) {
    this._pointList = val;
  }
}