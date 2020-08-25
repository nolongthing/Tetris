import { Car } from './core/Pieces';
import { PieceCamp } from './core/type';
import { PiecePageViewer } from './viewer/PiecePageViewer';
import './apiService/service';


const car = new Car(PieceCamp.Black, { x: 0, y: 0 }, new PiecePageViewer());

// car.viewer.show(car);


// setTimeout(() => {
//   car.point = {
//     x: 2,
//     y: 8
//   }
// }, 1000);