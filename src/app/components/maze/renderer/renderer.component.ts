import { Component, OnInit, Input } from '@angular/core';
import { MazeService } from '../../../providers/maze-service.service';
import MazeNode from 'src/app/models/MazeNode';
import { MazeSolutionService } from 'src/app/providers/maze-solution.service';
import { MazeSuccessService } from 'src/app/providers/maze-success.service';

@Component({
  selector: 'maze-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.less']
})
export class RendererComponent implements OnInit {
  @Input() X: number;
  @Input() Y: number;
  grid;
  startable: boolean = false;
  goalCell: MazeNode;
  isProcessing: boolean = false;
  startIndex: number;
  constructor(private mazeService: MazeService, private mazeSolutionService: MazeSolutionService, private mazeSuccessService: MazeSuccessService) {
    this.startIndex = 0;
   }

  ngOnInit() {
    this.grid = this.mazeService.constructGridArray(this.X, this.Y, MazeNode);
  }

  toggleObstacle(cell: MazeNode) {
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

  doSolveMaze(grid: any, startIndex) {
    this.mazeSolutionService.executeMaze(grid, startIndex);
    this.isProcessing = true;
  }

  doRadioSelect($event) {
    this.startIndex = $event.target.value;
  }

  doReset() {
    this.mazeSuccessService.resetmaze(this.grid);
    this.isProcessing = false;
  }

}
