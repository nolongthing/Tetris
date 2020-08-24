import { Car } from './core/Pieces';
import { PieceCamp } from './core/type';
import { PiecePageViewer } from './viewer/PiecePageViewer';



const car = new Car(PieceCamp.Black, { x: 0, y: 0 }, new PiecePageViewer());

// car.viewer.show(car);
car.point = {
  x: 2,
  y: 8
}