import { IPoint, PieceName, PieceCamp } from "./type";
import { PiecePageViewer } from "viewer/PiecePageViewer";

export abstract class Piece {
  protected _point: IPoint = { x: 0, y: 0 }
  protected abstract _name: PieceName
  protected abstract _camp: PieceCamp
  protected abstract _viewer: PiecePageViewer
  constructor(

  ) {
    
  }


  get viewer() {
    return this._viewer;
  }
  get name() {
    return this._name;
  }

  get camp() {
    return this._camp;
  }

  get point() {
    return this._point;
  }

  set point(val: IPoint) {
    this._point = val;
    if (this._viewer) {
      this._viewer.show(this);
    }
  }

  abstract isCanMove(point: IPoint): boolean;
  /**
   * 棋子根据传入的坐标位置移动
   * @return {boolean} 是否移动成功
   */
  // protected move(): boolean {
  //   return true;
  // }
}