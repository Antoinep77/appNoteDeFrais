import { TestBed, inject } from '@angular/core/testing';

import { GestionnaireService } from './gestionnaire.service';

describe('GestionnaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionnaireService]
    });
  });

  it('should be created', inject([GestionnaireService], (service: GestionnaireService) => {
    expect(service).toBeTruthy();
  }));
});
