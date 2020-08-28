import { Piece } from "./Piece";
import { PieceName, PieceCamp, IPoint, TPieceArr } from "./type";
import { PiecePageViewer } from "viewer/PiecePageViewer";
import { PieceRules } from "./PieceRules";

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
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* 检查目标点是否符合棋子移动规则 */
    if (point.x === this.point.x || this.point.y === point.y) {
      /* 检查目标点是否与当前棋子分布存在碰撞 */
      const haveImpactPoint = pointList.some(item => (
        (item.x === point.x && ((point.y > item.y && item.y > piece.point.y) || (point.y < item.y && item.y < piece.point.y)))
        ||
        (item.y === point.y && ((point.x > item.x && item.x > piece.point.x) || (point.x < item.x && item.x < piece.point.x)))
      ));

      if (haveImpactPoint) {
        return false
      } else {
        return true
      }
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
   * @param piece 当前需要移动的棋子
   * @param point 需要移动到的目标位置
   * @param pointList 碰撞坐标列表
   */
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* 检查目标点是否符合棋子移动规则 */
    if (point.x === this.point.x || this.point.y === point.y) {
      /* 检查目标点是否与当前棋子分布存在碰撞 */
      const haveImpactPoint = pointList.some(item => (
        (item.x === point.x && ((point.y >= item.y && item.y > piece.point.y) || (point.y <= item.y && item.y < piece.point.y)))
        ||
        (item.y === point.y && ((point.x >= item.x && item.x > piece.point.x) || (point.x <= item.x && item.x < piece.point.x)))
      ));

      let middlePieces = [];
      const isPiecePoint = pointList.some(item => (
        item.y === point.y && item.x === point.x
      ))
      /* 当前目标点是否存在棋子 */
      if (isPiecePoint) {
        middlePieces = pointList.filter(item => (
          (item.x === point.x && ((point.y > item.y && item.y > piece.point.y) || (point.y < item.y && item.y < piece.point.y)))
          ||
          (item.y === point.y && ((point.x > item.x && item.x > piece.point.x) || (point.x < item.x && item.x < piece.point.x)))
        ))
        if (middlePieces.length === 1) {
          return true
        }
      }

      if (haveImpactPoint) {
        return false
      } else {
        return true
      }
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
   * @param piece 当前需要移动的棋子
   * @param point 需要移动到的目标位置
   * @param pointList 碰撞坐标列表
   */
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* 不过界&田字&中心无子 */
    if (PieceRules.isOverLine(piece, point)) {
      if ((point.x === piece.point.x + 2 || point.x === piece.point.x - 2) && (point.y === piece.point.y + 2 || point.y === piece.point.y - 2)) {
        const impactPoint: IPoint = { x: (point.x + piece.point.x) / 2, y: (point.y + piece.point.y) / 2 };
        if (PieceRules.hasImpact(impactPoint, pointList)) {
          return false
        } else {
          return true
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
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
   * @param piece 当前需要移动的棋子
   * @param point 需要移动到的目标位置
   * @param pointList 碰撞坐标列表
   */
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* （邻点 && 未超区域）|| 无间隔对狙 */
    if (((point.y === piece.point.y) && (point.x === piece.point.x + 1 || point.x === piece.point.x - 1)) || ((point.x === piece.point.x) && (point.y === piece.point.y + 1 || point.y === piece.point.y - 1))) {
      return PieceRules.isCenterArea(point);
    } else {
      return false;
    }
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
   * @param piece 当前需要移动的棋子
   * @param point 需要移动到的目标位置
   * @param pointList 碰撞坐标列表
   */
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* 日字&无碰撞 */
    if (
      ((point.x === piece.point.x + 2 || point.x === piece.point.x - 2) && (point.y === piece.point.y + 1 || point.y === piece.point.y - 1))
      || ((point.x === piece.point.x + 1 || point.x === piece.point.x - 1) && (point.y === piece.point.y + 2 || point.y === piece.point.y - 2))
    ) {
      const impactPoint: IPoint = this.absoluteJudge(piece.point, point);
      if (PieceRules.hasImpact(impactPoint, pointList)) {
        return false
      } else {
        return true
      }
    } else {
      return false;
    }
  }
  /**
   * 返回‘马腿’坐标值
   * @param piecePoint  棋子坐标
   * @param targetPoint 目标坐标
   */
  private absoluteJudge(piecePoint: IPoint, targetPoint: IPoint) {
    if (Math.abs(piecePoint.x - targetPoint.x) === 2) {
      return {
        x: (piecePoint.x + targetPoint.x) / 2,
        y: piecePoint.y
      }
    }
    return {
      x: piecePoint.x,
      y: (piecePoint.y + targetPoint.y) / 2
    }
  }

}

export class Pawn extends Piece {
  protected _name: PieceName = PieceName.Pawn;
  private _hadOverLine: boolean = false;
  private readonly _direction: 'up' | 'down';
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
    this._direction = this._point.y >= 5 ? 'up' : 'down';
  }

  /**
   * 根据传入的坐标点判断是否可移动
   * @param piece 当前需要移动的棋子
   * @param point 需要移动到的目标位置
   * @param pointList 碰撞坐标列表
   */
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* 过界判断&坐标判断 */
    if (this._hadOverLine) {
      if (
        (point.y === piece.point.y && (point.x === piece.point.x + 1 || point.x === piece.point.x - 1))
        || (point.x === piece.point.x && point.y === (this._direction === 'down' ? piece.point.y + 1 : piece.point.y - 1))
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (point.y === (this._direction === 'down' ? piece.point.y + 1 : piece.point.y - 1)) {
        if (!PieceRules.isOverLine(piece, point)) {
          this._hadOverLine = true;
        }
        return true;
      }
      return false;
    }
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
   * @param piece 当前需要移动的棋子
   * @param point 需要移动到的目标位置
   * @param pointList 碰撞坐标列表
   */
  isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    /* 对角邻点 */
    if ((point.x === piece.point.x + 1 || point.x === piece.point.x - 1) && (point.y === piece.point.y + 1 || point.y === piece.point.y - 1)) {
      return PieceRules.isCenterArea(point);
    } else {
      return false;
    }
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
