import { Injectable } from '@angular/core';
import MazeNode from 'src/app/models/MazeNode';
import { MazeSuccessService } from './maze-success.service';


@Injectable({
  providedIn: 'root'
})
export class MazeSolutionService {

  constructor(private mazeSucessService: MazeSuccessService) { }
  private maze: any;
  private stack: any[] = [];
  private decisionSet: string[] = ['up', 'down', 'left', 'right'];
  private failed: boolean = false;
  private startIndex: number;
  executeMaze(maze: any, startIndex) {
    this.maze = maze;
    this.startIndex = startIndex;
    this.doSearch(this.pickStart());
  }

  private doSearch(startPos: number[]) {
    const x = startPos[0];
    const y = startPos[1];
    const cell = this.maze[x][y];


    // base case, end recursion
    if (cell.data.type === 'goal') {
      this.mazeSucessService.RunSequence(this.maze, 'victory');
      return true;
    } else {
      const nextCell = this.makeDecision(cell);
      if (!this.failed) {
        nextCell.data.type = nextCell.data.type !== 'goal' ? 'visiting' : 'goal';
        cell.data.visited = true;
        cell.data.type = 'visited';
        setTimeout(() => {
          return this.doSearch([nextCell.data.y, nextCell.data.x]);
        }, 500);
      } else {
        this.mazeSucessService.RunSequence(this.maze, 'defeat');
      }
    }
  }


  private makeDecision(currentCell: MazeNode) {
    const direction = this.decisionSet.find((dir) => this.isSuitableCell(currentCell, dir, this.checkSuitable));
    const nextCell = this.getCellInDirection(currentCell.data.x, currentCell.data.y, direction);
    if (!direction || typeof nextCell === 'undefined') {
      if (this.stack.length === 0) {
        this.failed = true;
      }
      return this.stack.pop();
    } else {
      currentCell.data.type = 'visited';
      this.stack.push(currentCell);
      // if the next cell is undefined then that means we need to pop back
      return nextCell;
    }
  }

  private isSuitableCell(cell: MazeNode, direction: string, callback) {
    const testCell = this.getCellInDirection(cell.data.x, cell.data.y, direction);
    if (typeof testCell !== 'undefined') {
      return callback(testCell);
    }
    return false;
  }

  private getCellInDirection(x: number, y: number, direction: string) {
    switch (direction) {
      case this.decisionSet[0]:
        return this.findCell(x, y + 1);
      case this.decisionSet[1]:
        return this.findCell(x, y - 1);
      case this.decisionSet[2]:
        return this.findCell(x + 1, y);
      case this.decisionSet[3]:
      default:
        return this.findCell(x - 1, y);
    }
  }

  private findCell(x: number, y: number) {
    const id = x + 'by' + y;
    const row = this.maze.find((r) => r.find((c) => c.id === id));
    if (typeof row === 'undefined') {
      return undefined;
    } else {
      return row.find((c) => c.id === id);
    }
  }

  private pickStart() {
    const lengthX = this.maze[0].length - 1;
    const lengthY = this.maze.length - 1;
    const fourCorners = [[0, 0], [lengthX, 0], [0, lengthY], [lengthX, lengthY]];
    return fourCorners[this.startIndex];
  }

  private checkSuitable(cell) {
    return cell.data.type !== 'visited' && cell.data.type !== 'obstacle';
  }

}
