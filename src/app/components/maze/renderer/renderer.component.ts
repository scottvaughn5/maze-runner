import { Component, OnInit, Input } from '@angular/core';
import { MazeService } from '../../../providers/maze-service.service';
import MazeNode from 'src/app/models/MazeNode';
@Component({
  selector: 'maze-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.less']
})
export class RendererComponent implements OnInit {
  @Input() X:number;
  @Input() Y:number;
  grid;
  constructor(private mazeService: MazeService) { }

  ngOnInit() {
    this.grid = this.mazeService.constructGridArray(this.X, this.Y, MazeNode);
    console.log(this.grid);
  }

  toggleObstacle(thisObj: any, cell: MazeNode) {
    cell.data.obstacle = !cell.data.obstacle;
    console.log(thisObj);
    console.log(cell);
  }


}
