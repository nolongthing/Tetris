import { Shape, Point, Direction, Blocks } from "./types";
import { BoardSize } from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";

export class TetrisRule {
  /**
   * 根据方块形状确认是否可移动到目标坐标点
   */
  static canMove(shape: Shape, targetPoint: Point, blocks: Blocks): boolean {
    const tempPoints: Point[] = shape.map(i => {
      return {
        x: i.x + targetPoint.x,
        y: i.y + targetPoint.y
      }
    });
    let isOverflow = tempPoints.some(i => (i.x < 0 || i.x > BoardSize.width - 1 || i.y > BoardSize.height - 1));
    let hasPoint = tempPoints.filter(p => blocks.some(pi => pi.point.x === p.x && pi.point.y === p.y));
    if (isOverflow) {
      return false;
    } else {
      return hasPoint.length <= 0
    }

  }

  /**
   * 方块根据传入方向移动
   * @returns {boolean} 移动是否成功
   */
  static move(sqg: SquareGroup, direction: Direction, blocks: Blocks): boolean {
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
    if (this.canMove(sqg.shape, nextPoint, blocks)) {
      sqg.centerPoint = nextPoint;
      return true
    };
    return false
  }

  /**
   * 方块自动根据传入方向移动到不能移动为止
   */
  static autoMove(sqg: SquareGroup, direction: Direction, blocks: Blocks) {
    while (this.move(sqg, direction, blocks)) {

    }
  }

  /**
   * 方块变换形态
   */
  static changeShape(sqg: SquareGroup, blocks: Blocks) {
    if (this.canMove(sqg.getCenterPointBeforeRotate(), sqg.centerPoint, blocks)) {
      sqg.rotate();
    }
  }
}