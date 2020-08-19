import { Shape, Point } from "./types";
import { createRandom } from "./Utils";
import { SquareGroup } from "./SquareGroup";

class TShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }],
      centerPoint,
      color
    )
  }

}

class LShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
      centerPoint,
      color
    )
  }

}

class LMirrorShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
      centerPoint,
      color
    )
  }

}

class SShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }],
      centerPoint,
      color
    )
  }

  rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }

}

class SMirrorShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
      centerPoint,
      color
    )
  }
  rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

class SquareShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
      centerPoint,
      color
    )
  }
  rotate() {

  }
}

class LineShape extends SquareGroup {
  constructor(centerPoint: Point, color: string) {
    super(
      [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      centerPoint,
      color
    )
  }
  rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }

}

export const shapes = [
  TShape,
  LShape,
  LMirrorShape,
  SShape,
  SMirrorShape,
  SquareShape,
  LineShape
];

export const colors = [
  "#FF6666",
  "#CCFF99",
  "#0099CC",
  "#339933"
]

/**
 * 随机产生一个俄罗斯方块组合
 * @returns {SquareGroup} 方块组合的实例
 */
export function createTetriShape(centerPoint:Point): SquareGroup {
  const shapeI = createRandom(0, shapes.length);
  const colorI = createRandom(0, colors.length);
  const sqg = new shapes[shapeI](centerPoint, colors[colorI]);
  return sqg;
}
