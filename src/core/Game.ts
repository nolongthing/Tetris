import { GameStatus, Direction, Shape, Point } from "./types";
import { SquareGroup } from "./SquareGroup";
import { createTetriShape, shapes } from "./Tetris";
import { GamePageViewer } from "./viewer/GamePageViewer";
import { TetrisRule } from "./TetrisRule";
import { BoardSize, PanelSize, timeConf } from './GameConfig'

/**
 * 游戏的整体控制类
 * 不关注如何显示，数据上控制游戏的开始与暂停等状态
 */
export class Game {
  private _gameStatus: GameStatus = GameStatus.Start
  private _nextTetris: SquareGroup = createTetriShape({ x: 0, y: 0 });
  private _curTetris?: SquareGroup
  private _viewer: GamePageViewer
  private _needChange: boolean = true;
  private _timer?: number
  constructor(gameController: GamePageViewer) {
    this._viewer = gameController;
    this._viewer.showNextTetris(this._nextTetris);
    this.setInitCenterPoint(PanelSize.width, this._nextTetris)
  }

  /**
   * 初始化开始游戏：给当前方块赋值，创造下一个方块；当前方块开始下落；
   */
  initGame() {
    if (this._gameStatus === GameStatus.Playing) {
      return;
    }
    this._gameStatus = GameStatus.Playing;
    this.changeTetris();
  }

  /**
   * 自动下落
   * @param tetris 
   */
  private autoMove(tetris: SquareGroup) {
    this._timer = setInterval(() => {
      this._needChange = TetrisRule.move(tetris, Direction.Down);
      if (!this._needChange) {
        this._needChange = true;
        clearInterval(this._timer);
        this.changeTetris();
      }
    }, timeConf)
  }

  /**
   * 开始游戏
   */
  start() {
    if (this._curTetris && this._gameStatus === GameStatus.Pause) {
      this._gameStatus = GameStatus.Playing;
      this.autoMove(this._curTetris);
    }
  }

  /**
   * 暂停游戏
   */
  pause() {
    this._gameStatus = GameStatus.Pause;
    if (this._timer) {
      clearInterval(this._timer);
    }
  }

  /**
   * 变形
   */
  changeShape() {
    if (this._curTetris && this._gameStatus === GameStatus.Playing) {
      TetrisRule.changeShape(this._curTetris);
    }
  }

  /**
   * 切换方块
   */
  private changeTetris() {
    this._curTetris = this._nextTetris;
    this._viewer.removeTetris(this._nextTetris);
    this._nextTetris = createTetriShape({ x: 0, y: 0 });
    this._viewer.showCurTetris(this._curTetris);
    this._viewer.showNextTetris(this._nextTetris);
    this.setInitCenterPoint(PanelSize.width, this._nextTetris);
    this.setInitCenterPoint(BoardSize.width, this._curTetris);
    this.autoMove(this._curTetris);
  }

  /**
   * 根据传入的容器宽度和方块，设置中心点坐标
   */
  private setInitCenterPoint(width: number, tetris: SquareGroup): void {
    tetris.centerPoint = {
      x: Math.floor(width / 2),
      y: tetris.centerPoint.y
    }
    while (tetris.squares.some(item => item.point.y < 0)) {
      console.log(111)
      tetris.centerPoint = {
        x: Math.floor(width / 2),
        y: tetris.centerPoint.y + 1
      }
    }
  }
}