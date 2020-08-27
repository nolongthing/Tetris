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
    /* 做car的碰撞实验 */
    if (piece.isCanMove(point)) {
      console.log(point,'当前棋子的坐标',piece);
      const haveImpactPoint = pointList.some(item => (
        (item.x === point.x && ((point.y > item.y && item.y > piece.point.y) || (point.y < item.y && item.y < piece.point.y)))
        ||
        (item.y === point.y && ((point.x > item.x && item.x > piece.point.x) || (point.x < item.x && item.x < piece.point.x)))
      ));

      console.log(haveImpactPoint,'碰撞判断');

      if (haveImpactPoint) {
        return false
      } else {
        return true
      }
    } else {
      return false;
    }
  }
  /**
   * 将棋子移动到目标位置
   */
  static move(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    if (this.isCanMove(piece, point, pointList)) {
      // this.point = point;
      piece.point = point;
      return true
    }
    return false
  }
}