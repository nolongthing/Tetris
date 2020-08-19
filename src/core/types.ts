import { Square } from "./Square"

export interface Point {
  readonly x: number
  readonly y: number
}

export interface IViewer {
  show: () => void;
  remove: () => void
}

export type Shape = Point[]

export type Blocks = Square[]

export enum Direction {
  Left,
  Right,
  Down,
}

export enum GameStatus{
  Start,
  Playing,
  Pause,
  End
}