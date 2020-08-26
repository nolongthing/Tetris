import { Car, Sergeant, Pawn, Cannon } from './core/Pieces';
import { PieceCamp } from './core/type';
import { PiecePageViewer } from './viewer/PiecePageViewer';
import $ from 'jquery';
import './apiService/service';



const car = new Car(PieceCamp.Black, { x: 0, y: 0 }, new PiecePageViewer());

const a = new Pawn(PieceCamp.Red, { x: 0, y: 6 }, new PiecePageViewer());

const b = new Pawn(PieceCamp.Black, { x: 0, y: 3 }, new PiecePageViewer());

const c = new Cannon(PieceCamp.Red, { x: 1, y: 7 }, new PiecePageViewer());

// car.viewer.show(car);


// setTimeout(() => {
//   car.point = {
//     x: 2,
//     y: 8
//   }
// }, 1000);

$('.gameBox').on('click', (e) => {
  const x = Math.floor(e.offsetX / 50)
  const y = Math.floor(e.offsetY / 50)
  console.log(x, y);
  car.move({ x, y })
})

$('.piece').on('click', (e) => {
  e.stopPropagation()
  console.log(11);
})