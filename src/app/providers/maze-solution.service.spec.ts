import { TestBed } from '@angular/core/testing';

import { MazeSolutionService } from './maze-solution.service';

describe('MazeSolutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazeSolutionService = TestBed.get(MazeSolutionService);
    expect(service).toBeTruthy();
  });
});
