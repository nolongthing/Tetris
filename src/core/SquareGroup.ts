import { Square } from "./Square";
import $ from 'jquery';
import { Shape, Point } from "./types";
import { SquarePageViewer } from "./viewer/SquarePageViewer";

export class SquareGroup {
  private _squares: readonly Square[];
  constructor(
    private _shape: Shape,
    private _centerPoint: Point,
    private color: string
  ) {
    const tempArr: Square[] = [];
    this._shape.forEach(item => {
      const square = new Square({
        x: this._centerPoint.x + item.x,
        y: this._centerPoint.y + item.y
      }, this.color);
      square.viewer = new SquarePageViewer(square, $('#root'));
      tempArr.push(square);
    })
    this._squares = tempArr;
  }

  get shape() {
    return this._shape;
  }

  set shape(val) {
    this._shape = val;
    this._squares.forEach((item, index) => {
      item.point = {
        x: this._centerPoint.x + this._shape[index].x,
        y: this._centerPoint.y + this._shape[index].y
      }
    })
  }

  get centerPoint() {
    return this._centerPoint
  }
  set centerPoint(val: Point) {
    this._centerPoint = val;
    this._squares.forEach((item, index) => {
      item.point = {
        x: this._centerPoint.x + this._shape[index].x,
        y: this._centerPoint.y + this._shape[index].y
      }
    })
  }


}