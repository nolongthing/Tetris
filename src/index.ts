import { Car, Sergeant, Pawn, Cannon } from './core/Pieces';
import { PieceCamp } from './core/type';
import { PiecePageViewer } from './viewer/PiecePageViewer';

import './apiService/service';
import { Game } from './core/Game';
import { GamePageViewer } from 'viewer/GamePageViewer';



// const car = new Car(PieceCamp.Black, { x: 0, y: 0 }, new PiecePageViewer());

// const a = new Pawn(PieceCamp.Red, { x: 0, y: 6 }, new PiecePageViewer());

// const b = new Pawn(PieceCamp.Black, { x: 0, y: 3 }, new PiecePageViewer());

// const c = new Cannon(PieceCamp.Red, { x: 1, y: 7 }, new PiecePageViewer());

// car.viewer.show(car);


// setTimeout(() => {
//   car.point = {
//     x: 2,
//     y: 8
//   }
// }, 1000);



new GamePageViewer(new Game());