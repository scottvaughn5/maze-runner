import { Component, OnInit, Input } from '@angular/core';
import { MazeService } from '../../../providers/maze-service.service';
import MazeNode from 'src/app/models/MazeNode';
import { MazeSolutionService } from 'src/app/providers/maze-solution.service';


@Component({
  selector: 'maze-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.less']
})
export class RendererComponent implements OnInit {
  @Input() X:number;
  @Input() Y:number;
  grid;
  startable: boolean = false;
  goalCell: MazeNode;
  isProcessing: boolean = false;
  constructor(private mazeService: MazeService, private mazeSolutionService: MazeSolutionService) {}

  ngOnInit() {
    this.grid = this.mazeService.constructGridArray(this.X, this.Y, MazeNode);
  }

  toggleObstacle( cell: MazeNode) {
    cell.data.type = cell.data.type === 'obstacle' ? 'tile' : 'obstacle';
  }

  toggleGoal(cell: MazeNode) {
    if (this.goalCell) {
      this.goalCell.data.type = 'tile';
    }
    cell.data.type = 'goal';
    this.goalCell = cell;
    this.startable = !this.startable;
  }

  doSolveMaze(grid: any) {
    this.mazeSolutionService.executeMaze(grid);
    this.isProcessing = true;
  }

}
