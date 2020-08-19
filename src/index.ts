import $ from 'jquery';
// import { Square } from "./core/Square";
// import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
// import { SquareGroup } from './core/SquareGroup';
import { createTetriShape } from './core/Tetris';
import { TetrisRule } from './core/TetrisRule';
import { Direction } from './core/types';
import { Game } from './core/Game';
import { GamePageViewer } from './core/viewer/GamePageViewer';


// const square = new Square();
// square.viewer = new SquarePageViewer(square, $('#root'));

// $('#display').on('click', () => {
//   if (square.viewer) {
//     square.viewer.remove();
//   }
// })

// $('#show').on('click', () => {
//   square.viewer = new SquarePageViewer(square, $('#root'))
// })
// const sqg = new SquareGroup([{ x: -1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: 1 }], { x: 6, y: 0 }, '#f40');

// let sqg = createTetriShape({x:1,y:2});
// $('#down').on('click', () => {
//   TetrisRule.move(sqg, Direction.Down);
// });
// $('#left').on('click', () => {
//   TetrisRule.move(sqg, Direction.Left);
// });
// $('#right').on('click', () => {
//   TetrisRule.move(sqg, Direction.Right);
// });



const game = new Game(new GamePageViewer());

game.initGame();

$('#pause').on('click',()=>{
  game.pause();
})

$('#start').on('click',()=>{
  game.start();
})

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    game.changeShape();
  }
});