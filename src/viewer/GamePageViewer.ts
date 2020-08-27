import $ from 'jquery';
import { pieceView } from './pieceViewConf';
import { Game } from 'core/Game';
import { IPoint, PieceCamp } from 'core/type';
import { PieceRules } from 'core/PieceRules';
import { Piece } from 'core/Piece';

export class GamePageViewer {
  private _selectedPoint?: IPoint
  constructor(
    private _game: Game
  ) {
    this.initFun();
  }

  private initFun() {
    $('.gameBox').on('click', (e) => {
      this.handleBoard(e);
      // car.move({ x, y })
    });
    setTimeout(() => {
      $('.piece').on('click', (e) => {
        e.stopPropagation()
        // console.log(11);
        this.handlePiece(e);
      })
    }, 0);
  }

  /**
   * 点击棋子 完成的操作
   */
  private handlePiece(e: JQuery.ClickEvent) {
    console.log(e);
    const { pieceList, selected, curPlayer, pointList } = this._game;
    const { left, top } = $(e.target).position();
    const point: IPoint = {
      x: Math.floor(left / pieceView.width),
      y: Math.floor(top / pieceView.height)
    }
    const curPiece = pieceList?.find(item => item.point.x === point.x && item.point.y === point.y);
    if (!curPiece) {
      return console.error('错误：未能从棋盘中找到当前点击的棋子');
    }
    /* 是否存在已选中棋子 */
    if (!selected) {
      /* 选手是否与点击棋子同阵营 */
      if (curPlayer === curPiece.camp) {
        console.log('首次选中棋子:', curPiece);
        /* 选中 */
        this._game.selected = curPiece;
        this.showMark(curPiece.point);
      } else {
        return;
      }
    } else {
      /* 点击棋子是否已被选中 */
      if (selected.point.y === point.y && selected.point.x === point.x) {
        /* 取消选中 */
        this._game.selected = undefined;
        this.removeMark();
      } else {
        /* 点击棋子是否与选中棋子同阵营 */
        if (selected.camp === curPiece.camp) {
          /* 切换选中 */
          this._game.selected = curPiece;
          this.showMark(curPiece.point);
        } else {
          /* 尝试移动选中棋子，成功就‘吃’ */
          console.log(1221212);
          this._selectedPoint = selected.point;
          const isMove = PieceRules.move(selected, curPiece.point, pointList);
          console.log(isMove);
          if (isMove) {
            /* 移除目标位非当前阵营的棋子 */
            this.removePiece(curPiece);
            /* 选中置空，切换当前选手 */
            this.showMark(selected.point);
            this._game.selected = undefined;
            this._game.curPlayer = curPlayer === PieceCamp.Red ? PieceCamp.Black : PieceCamp.Red;
          } else {
            return;
          }
        }
      }
    }
  }

  /**
   * 点击棋盘 完成的操作
   */
  private handleBoard(e: JQuery.ClickEvent) {
    const x = Math.floor(e.offsetX / pieceView.width)
    const y = Math.floor(e.offsetY / pieceView.height)
    console.log(x, y);
  }

  /**
   * 显示当前选中棋子的mark标识
   */
  private showMark(point: IPoint) {
    console.log('显示选中坐标：', point);
  }
  /**
   * 取消显示当前棋子的mark标识
   */
  private removeMark() {
    console.log('取消选中');
  }
  /**
   * 移除棋子的显示和数据
   */
  private removePiece(piece: Piece) {
    piece.viewer.remove();
    if (this._game.pieceList) {
      const index = this._game.pieceList.findIndex(item => item.point.x === piece.point.x && item.point.y === piece.point.y && piece.camp === item.camp);
      if (index >= 0) {
        this._game.pieceList?.splice(index, 1);
      }
    }
    if (this._game.pointList) {
      const index = this._game.pointList.findIndex(item => item.x === this._selectedPoint?.x && item.y === this._selectedPoint.y);
      if (index >= 0) {
        this._game.pointList.splice(index, 1);
      }
    }
  }
}