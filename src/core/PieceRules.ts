import { Piece } from "./Piece";
import { IPoint } from "./type";

export class PieceRules {

  /**
   * 棋子是否可移动到目标位置
   * @param piece 棋子
   * @param point 目标点
   * @param pointList 碰撞点列表
   */
  static isCanMove(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    if (piece.isCanMove(point)) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 将棋子移动到目标位置
   */
  static move(piece: Piece, point: IPoint, pointList: IPoint[]) {
    if (this.isCanMove(piece, point, pointList)) {
      // this.point = point;
      piece.point = point;
    }
  }
}