import { Shape, Point, Direction } from "./types";
import { BoardSize } from "./GameConfig";
import { SquareGroup } from "./SquareGroup";

export class TetrisRule {
  /**
   * 根据方块形状确认是否可移动到目标坐标点
   */
  static canMove(shape: Shape, targetPoint: Point): boolean {
    const tempPoints: Point[] = shape.map(i => {
      return {
        x: i.x + targetPoint.x,
        y: i.y + targetPoint.y
      }
    });
    const isOverflow = tempPoints.some(i => (i.x < 0 || i.x > BoardSize.width - 1 || i.y > BoardSize.height - 1));
    return !isOverflow;
  }

  /**
   * 方块根据传入方向移动
   * @returns {boolean} 移动是否成功
   */
  static move(sqg: SquareGroup, direction: Direction): boolean {
    let nextPoint: Point;
    if (direction === Direction.Left) {
      nextPoint = {
        ...sqg.centerPoint,
        x: sqg.centerPoint.x - 1
      }
    } else if (direction === Direction.Right) {
      nextPoint = {
        ...sqg.centerPoint,
        x: sqg.centerPoint.x + 1
      }
    } else {
      nextPoint = {
        ...sqg.centerPoint,
        y: sqg.centerPoint.y + 1
      }
    }
    if (this.canMove(sqg.shape, nextPoint)) {
      sqg.centerPoint = nextPoint;
      return true
    };
    return false
  }

  /**
   * 方块自动根据传入方向移动到不能移动为止
   */
  static autoMove(sqg: SquareGroup, direction: Direction) {
    while (this.move(sqg, direction)) {

    }
  }

  /**
   * 方块变换形态
   */
  static changeShape(sqg: SquareGroup) {
    if (this.canMove(sqg.getCenterPointBeforeRotate(), sqg.centerPoint)) {
      sqg.rotate();
    }
  }
}