import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LyricsItem {
  lyrics: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = "https://api.lyrics.ovh/v1/cannibal%20corpse/hammer%20smashed%20face";

  constructor(private httpClient: HttpClient) {
  }

  fetch(): Observable<LyricsItem> {
    return <Observable<LyricsItem>>this.httpClient.get(this.baseURL);
  }
}
