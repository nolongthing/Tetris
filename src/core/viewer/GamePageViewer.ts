import { SquareGroup } from "../SquareGroup";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from 'jquery';

export class GamePageViewer {

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
}