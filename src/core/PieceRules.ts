import { Piece } from "./Piece";
import { IPoint } from "./type";

export class PieceRules {
  /**
   * 目标点是否在棋子可移动范围内(士、帅)
   * @param point 目标点
   * @return {boolean}  true=在范围内  false=不在范围内
   */
  static isCenterArea(point: IPoint): boolean {
    if (point.x >= 3 && point.x <= 5) {
      if (point.y >= 5) {
        return point.y >= 7
      } else {
        return point.y <= 2
      }
    } else {
      return false;
    }
  }

  /**
   * 目标点是否在当前棋子的对面（楚河汉界）
   * @param piece 棋子
   * @param point 目标点
   * @return {boolean}  true=未过界  false=过界
   */
  static isOverLine(piece: Piece, point: IPoint): boolean {
    return ((point.y > 4 && piece.point.y > 4) || (point.y <= 4 && piece.point.y <= 4));
  }

  /**
   * 检测坐标点是否在坐标数组中
   * @param point 坐标点
   * @param pointList 坐标点数组
   * @return {boolean}  true=存在  false=不存在
   */
  static hasImpact(point: IPoint, pointList: IPoint[]): boolean {
    return pointList.some(item => (item.y === point.y && item.x === point.x));
  }
  /**
   * 将棋子移动到目标位置
   */
  static move(piece: Piece, point: IPoint, pointList: IPoint[]): boolean {
    if (piece.isCanMove(piece, point, pointList)) {
      // this.point = point;
      piece.point = point;
      return true
    }
    return false
  }
}