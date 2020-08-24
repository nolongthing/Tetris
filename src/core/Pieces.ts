import { Piece } from "./Piece";
import { PieceName, PieceCamp, IPoint, TPieceArr } from "./type";
import { PiecePageViewer } from "viewer/PiecePageViewer";

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



}
