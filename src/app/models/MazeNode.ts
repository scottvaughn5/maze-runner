import { IMazeNode } from '../interface/IMazeNode';

export default class MazeNode implements IMazeNode {
    id: string;
    data: any;
    constructor(id: string, data: any) {
        this.id = id;
        this.data = data;
    }
}