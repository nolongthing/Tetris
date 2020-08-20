import { GameStatus, Direction, Shape, Point, Blocks } from "./types";
import { SquareGroup } from "./SquareGroup";
import { createTetriShape, shapes } from "./Tetris";
import { GamePageViewer } from "./viewer/GamePageViewer";
import { TetrisRule } from "./TetrisRule";
import { BoardSize, PanelSize, timeConf } from './GameConfig'
import { Square } from "./Square";

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
  private _blocks: Blocks = [];

  get gameStatus() {
    return this._gameStatus;
  }
  constructor(gameController: GamePageViewer) {
    this._viewer = gameController;
    this._viewer.showNextTetris(this._nextTetris);
    this.setInitCenterPoint(PanelSize.width, this._nextTetris);
    this._viewer.initPage(this);
  }

  /**
   * 初始化开始游戏：给当前方块赋值，创造下一个方块；当前方块开始下落；
   */
  initGame() {
    if (this._gameStatus === GameStatus.Playing) {
      return;
    }
    if (this.gameStatus === GameStatus.End) {
      this._blocks.forEach(item => {
        item.viewer?.remove();
      })
      this._blocks = [];
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
      this._needChange = TetrisRule.move(tetris, Direction.Down, this._blocks);
      if (!this._needChange) {
        this._needChange = true;
        clearInterval(this._timer);
        this.afterMove();
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
      TetrisRule.changeShape(this._curTetris, this._blocks);
    }
  }

  goLeft() {
    if (this._curTetris && this._gameStatus === GameStatus.Playing) {
      TetrisRule.move(this._curTetris, Direction.Left, this._blocks);
    }
  }


  goRight() {
    if (this._curTetris && this._gameStatus === GameStatus.Playing) {
      TetrisRule.move(this._curTetris, Direction.Right, this._blocks);
    }
  }

  goDown() {
    if (this._curTetris && this._gameStatus === GameStatus.Playing) {
      TetrisRule.autoMove(this._curTetris, Direction.Down, this._blocks);
    }
  }

  /**
   * 判断游戏是否结束
   */
  private gameOver() {
    if (this._curTetris) {
      if (!TetrisRule.canMove(this._curTetris.shape, this._curTetris.centerPoint, this._blocks)) {
        this._gameStatus = GameStatus.End;
        clearInterval(this._timer);
        this._timer = undefined;
        this._viewer.setStatusShow('游戏结束，按空格键开始新的游戏', 'flex');
        return true;
      }
    }
  }

  /**
   * 方块下落完成之后的函数
   */
  private afterMove() {
    //如果当前方块有值，将其塞入blocks数组中
    if (this._curTetris) {
      this._blocks.push(...this._curTetris.squares);
    }
    //判断是否需要删除行
    const num = this._viewer.removeBlock(this._blocks, BoardSize.width);
    console.log(num);
    //执行切换方块
    this.changeTetris();
  }

  /**
   * 切换方块
   */
  private changeTetris() {
    this._curTetris = this._nextTetris;
    this._viewer.removeTetris(this._nextTetris);
    this.setInitCenterPoint(BoardSize.width, this._curTetris);
    //判断游戏是否结束
    if (this.gameOver()) return;
    this._viewer.showCurTetris(this._curTetris);

    this._nextTetris = createTetriShape({ x: 0, y: 0 });
    this._viewer.showNextTetris(this._nextTetris);
    this.setInitCenterPoint(PanelSize.width, this._nextTetris);

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
      tetris.centerPoint = {
        x: Math.floor(width / 2),
        y: tetris.centerPoint.y + 1
      }
    }
  }
}