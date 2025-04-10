import { TestBed } from '@angular/core/testing';

import { CharacterManageService } from './character-manage.service';

describe('CharacterManageService', () => {
  let service: CharacterManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
