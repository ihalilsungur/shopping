import { TestBed } from '@angular/core/testing';

import { ShoesCategoryService } from './shoes-category.service';

describe('ShoesCategoryService', () => {
  let service: ShoesCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
