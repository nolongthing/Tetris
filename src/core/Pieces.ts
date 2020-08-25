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
export class Cannon extends Piece {
  protected _name: PieceName = PieceName.Cannon;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

}

export class Elephant extends Piece {
  protected _name: PieceName = PieceName.Elephant;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

}

export class General extends Piece {
  protected _name: PieceName = PieceName.General;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

}

export class Horse extends Piece {
  protected _name: PieceName = PieceName.Horse;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

}

export class Pawn extends Piece {
  protected _name: PieceName = PieceName.Pawn;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

}

export class Sergeant extends Piece {
  protected _name: PieceName = PieceName.Sergeant;
  constructor(
    protected _camp: PieceCamp,
    protected _point: IPoint = { x: 0, y: 0 },
    protected _viewer: PiecePageViewer,
  ) {
    super();
    this._viewer.show(this);
  }

}
