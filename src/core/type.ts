import { Piece } from "./Piece";

export interface IPoint {
  readonly x: number
  readonly y: number
  readonly camp?: PieceCamp
}

export enum PieceName {
  Car,
  Horse,
  Elephant,
  Sergeant,
  General,
  Pawn,
  Cannon
}

export enum PieceCamp {
  Red,
  Black
}

export interface IPiecePageViewer {
  show: (piece: Piece) => void,
  remove: () => void
}

export type TPieceArr = readonly Piece[];