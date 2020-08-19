import { SquareGroup } from "../SquareGroup";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from 'jquery';
import { Blocks, GameStatus } from "../types";
import { Game } from "../Game";
import { PanelSize, BoardSize } from "../GameConfig";
import PageConfig from "./PageConfig";

const { height, width } = PageConfig.SquareSize;
export class GamePageViewer {

  private _rootContent = $('#root');
  private _panelContent = $('#panel');
  private _statusContent = $('#gameStatus');

  /**
   * 游戏的初始化操作
   */
  initPage(game: Game) {
    //根据配置设置面板大小
    this._panelContent.css({
      width: PanelSize.width * width,
      height: PanelSize.height * height
    })
    this._rootContent.css({
      width: BoardSize.width * width,
      height: BoardSize.height * height
    })

    if(game.gameStatus === GameStatus.Start){
      this._statusContent.html('按空格以开始游戏')
    }

    //添加键盘点击事件
    $(document).on('keydown', (e) => {
      if (e.keyCode === 37) {
        game.goLeft();
      }
      if (e.keyCode === 38) {
        game.changeShape();
      }
      if (e.keyCode === 39) {
        game.goRight();
      }
      if (e.keyCode === 40) {
        game.goDown();
      }
      if (e.keyCode === 32) {
        if (game.gameStatus === GameStatus.Pause) {
          game.start()
        } else if (game.gameStatus === GameStatus.Playing) {
          game.pause()
        } else if (game.gameStatus === GameStatus.End || game.gameStatus === GameStatus.Start) {
          this._statusContent.css({
            display:'none'
          })
          game.initGame();
        }
      }
    })
  }

  /**
   * 显示下一个方块
   */
  showNextTetris(tetris: SquareGroup) {
    tetris.squares.forEach(item => {
      item.viewer = new SquarePageViewer(item, $('#panel'));
    })
  }

  /**
   * 显示当前方块
   */
  showCurTetris(tetris: SquareGroup) {
    tetris.squares.forEach(item => {
      item.viewer = new SquarePageViewer(item, $('#root'));
    })
  }

  /**
   * 移除方块的显示
   */
  removeTetris(tetris: SquareGroup) {
    tetris.squares.forEach(item => {
      if (item.viewer) {
        item.viewer.remove();
      }
    })
  }

  /**
   * 查找当前方块数组中是否有整行，并消除
   * @param block 
   * @param width
   * @return {number} 返回消除的行数
   */
  removeBlock(block: Blocks, width: number): number {
    const yArr = block.map(item => item.point.y);
    const maxY = Math.max(...yArr);
    const minY = Math.min(...yArr);
    let num = 0;
    for (let y = minY; y <= maxY; y++) {
      const tempArr = block.filter(item => item.point.y === y);
      if (tempArr.length === width) {
        num++;
        tempArr.forEach(item => {
          item.viewer?.remove();
          const index = block.findIndex(i => i.point.y === y);
          block.splice(index, 1);
        });
        block.forEach(item => {
          if (item.point.y < y) {
            item.point = {
              x: item.point.x,
              y: item.point.y + 1
            }
          }
        })
      }
    }
    return num;
  }

}