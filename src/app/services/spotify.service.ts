import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  data = {};
  token = 'Bearer BQC5etmKOPM5Qju1SG7lNzEzv5UffhuNSmE2ApO-0g2kyHMpmE7s96DCOO_pybcXHtnsqhjMyugaDVLF0WA';

  constructor(private miHttp: HttpClient) {
    console.log('service ready');
  }

  getQuery(myQuery: string): any {
    const url = `https://api.spotify.com/v1/${myQuery}`;
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.miHttp.get(url, {headers});
  }

  // servicio
  getNewReleases(): any{
    return this.getQuery('browse/new-releases').pipe(map((resp: any) => resp.albums.items));
  }
  buscarArtista(termini: any): any{
    return this.getQuery(`search?query=${termini.value}&type=track%2Cartist`).pipe(map((resp: any) => resp.artists.items));
  }
}
