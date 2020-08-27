import { IPiecePageViewer } from "core/type";
import $ from 'jquery';
import { Piece } from "core/Piece";
import { pieceView } from "./pieceViewConf";

const gameBox = $('#gameBox');
const { width, height } = pieceView;

export class PiecePageViewer implements IPiecePageViewer {
  private _pieceBox?: JQuery<HTMLElement>

  /**
   * 显示当前传入的棋子
   * @param piece 棋子
   */
  show(piece: Piece) {
    const { x, y } = piece.point;
    if (!this._pieceBox) {
      this._pieceBox = $(`<img class='piece' src="./src/img/${piece.camp}_${piece.name}.png">`).appendTo(gameBox)
    }
    this._pieceBox.css({
      position: 'absolute',
      left: x * width,
      top: y * height,
      width: 50,
      height: 50,
      backgroundSize: 'contain',
      zIndex: 2
    });
  }

  /**
   * 移除当前棋子的显示
   */
  remove() {
    this._pieceBox?.remove();
  }
}