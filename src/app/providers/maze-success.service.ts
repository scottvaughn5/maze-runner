import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MazeSuccessService {
  constructor() { }

  public RunSequence(maze: any, type: string) {
    console.log(maze);

    maze.forEach((row, i) => {
      setTimeout(() => {
        row.forEach((cell, j) => {
          setTimeout(() => {
            cell.data.type = type;
          }, this.randomTimeout());

        });
      }, this.randomTimeout());

    });
  }

  public resetmaze(maze: any) {
    maze.forEach(row => {
      row.forEach(cell => {
        if (cell.data.type !== 'obstacle') {
          cell.data.type = 'tile';
        }
      });
    });
  }
  private randomTimeout() {
    return Math.floor(Math.random() * 1000);
  }
}
