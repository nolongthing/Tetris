import { Point, IViewer } from "./types"

export class Square {

  private _viewer?: IViewer;

  get viewer() {
    return this._viewer;
  }
  set viewer(val) {
    this._viewer = val;
    if (val) {
      val.show();
    }
  }

  get point() {
    return this._point;
  }
  set point(val) {
    this._point = val;
    if (this._viewer) {
      this._viewer.show();
    }
  }

  get color() {
    return this._color;
  }
  constructor(private _point: Point = { x: 3, y: 0 }, private _color: string = '#f40') {

  }
}