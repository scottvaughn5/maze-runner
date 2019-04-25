import { TestBed } from '@angular/core/testing';

import { MazeSuccessService } from './maze-success.service';

describe('MazeSuccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazeSuccessService = TestBed.get(MazeSuccessService);
    expect(service).toBeTruthy();
  });
});
