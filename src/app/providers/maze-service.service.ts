import { Injectable } from '@angular/core';
import MazeNode from '../models/MazeNode';

@Injectable({
  providedIn: 'root'
})
export class MazeService {

  constructor() { }

  constructGridArray(X, Y, objClass:any) {
    const newGrid = [];
    for (let y = 0; y < Y; y++) {
      const newRow = [];
      for (let x = 0; x < X; x++) {
        newRow.push(new objClass( x + 'by' + y, {
          visited: true,
          obstacle: false
        }));
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }


}
