import { TestBed } from '@angular/core/testing';

import { LanguageBusService } from './language-bus.service';

describe('LanguageBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageBusService = TestBed.get(LanguageBusService);
    expect(service).toBeTruthy();
  });
});
