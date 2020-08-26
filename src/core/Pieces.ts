import { Piece } from "./Piece";
import { PieceName, PieceCamp, IPoint, TPieceArr } from "./type";
import { PiecePageViewer } from "viewer/PiecePageViewer";

export class Car extends Piece {
  protected _name: PieceName = PieceName.Car;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }
  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }

}
export class Cannon extends Piece {
  protected _name: PieceName = PieceName.Cannon;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }
}

export class Elephant extends Piece {
  protected _name: PieceName = PieceName.Elephant;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }

}

export class General extends Piece {
  protected _name: PieceName = PieceName.General;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }

}

export class Horse extends Piece {
  protected _name: PieceName = PieceName.Horse;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }

}

export class Pawn extends Piece {
  protected _name: PieceName = PieceName.Pawn;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }

}

export class Sergeant extends Piece {
  protected _name: PieceName = PieceName.Sergeant;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

  /**
   * 根据传入的坐标点判断是否可移动
   */
  isCanMove(point: IPoint): boolean {
    if (point.x === this.point.x || this.point.y === point.y) {
      return true;
    }
    return false;
  }

}


export const PiecesList = [
  Car,
  Horse,
  Elephant,
  Sergeant,
  General,
  Cannon,
  Pawn
]
