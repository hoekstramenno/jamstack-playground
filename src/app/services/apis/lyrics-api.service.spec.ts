import { TestBed } from '@angular/core/testing';

import { LyricsApiService } from './lyrics-api.service';

describe('LyricsApiService', () => {
  let service: LyricsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LyricsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
