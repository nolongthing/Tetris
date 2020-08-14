import { Shape } from "./types";
import { createRandom } from "./Utils";
import { SquareGroup } from "./SquareGroup";

abstract class PShape {
  protected deformTime: number = 0;
  protected abstract _initShape: Shape
  abstract deform(): void
}

// class TShape extends PShape {
//   protected _initShape: Shape;
//   deform(): void {
//     this._initShape = this._initShape.map(item => {
//       return {
//         x: item.y,
//         y: item.x
//       }
//     })
//   }
//   constructor() {
//     super();
//     this._initShape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }]
//   }

//   get initShape() {
//     return this._initShape;
//   }
// }

const TShape: Shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }];

const LShape: Shape = [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }];

const LMirrorShape: Shape = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }];

const SShape: Shape = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }];

const SMirrorShape: Shape = [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];

const SquareShape: Shape = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];

const LineShape: Shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];

const UShape: Shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: -1 }, { x: 1, y: -1 }];

export const shapes = [
  TShape,
  LShape,
  LMirrorShape,
  SShape,
  SMirrorShape,
  SquareShape,
  LineShape,
  UShape
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
export function createTetriShape() {
  const shapeI = createRandom(0, shapes.length);
  const colorI = createRandom(0, colors.length);
  const sqg = new SquareGroup(shapes[shapeI], { x: 6, y: 2 }, colors[colorI]);
  return sqg;
}
