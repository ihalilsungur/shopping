import { TestBed } from '@angular/core/testing';

import { ClothingCategoryService } from './clothing-category.service';

describe('ClothingCategoryService', () => {
  let service: ClothingCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
