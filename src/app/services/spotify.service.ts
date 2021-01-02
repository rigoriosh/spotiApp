import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, observeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  data = {};
  token = 'Bearer BQDN-sWxT7o_PrXB_QlOpiZQpYBCjPr2RlVZH3oDy0HzMIfaxbAdxeXT3kVX_XcCNPefV6I-bNzMj9N0geQ';

  constructor(private miHttp: HttpClient) {
    //console.log('service ready');
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
  getArtista(id: string): any{
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id: string): any{
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
    .pipe(map((data: any) => data.tracks));
  }
}
