import { Injectable } from '@angular/core';
import MazeNode from 'src/app/models/MazeNode';


@Injectable({
  providedIn: 'root'
})
export class MazeService {

  constructor() { }

  constructGridArray(X, Y, objClass: any) {
    const newGrid = [];
    for (let y = 0; y < Y; y++) {
      const newRow = [];
      for (let x = 0; x < X; x++) {
        newRow.push(new objClass( x + 'by' + y, {
          visited: false,
          type: "tile",
          'x' : x,
          'y' : y
        }));
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }


}
