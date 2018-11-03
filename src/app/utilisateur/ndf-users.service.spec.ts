import { TestBed, inject } from '@angular/core/testing';

import { NdfUsersService } from './ndf-users.service';

describe('NdfUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NdfUsersService]
    });
  });

  it('should be created', inject([NdfUsersService], (service: NdfUsersService) => {
    expect(service).toBeTruthy();
  }));
});
