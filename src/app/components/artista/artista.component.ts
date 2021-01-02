import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  id = '';
  singleArtis: object = {};
  loading = true;
  topTracks: any [] = [];

  constructor(private misRutas: ActivatedRoute, private miServicio: SpotifyService) {
    this.misRutas.params.subscribe(params => {
      //console.log(params);
      this.id = params.id;
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
   }
   getArtista(id: string): void{
    this.loading = true;
    this.miServicio.getArtista(id)
    .subscribe((artista: any) => {
      //console.log(artista);
      this.singleArtis = artista;
      this.loading = false;
    });
   }

   getTopTracks(id: string): void{
    this.loading = true;
    this.miServicio.getTopTracks(id)
    .subscribe((topTracks: any) => {
      //console.log(topTracks);
      this.topTracks = topTracks;
      this.loading = false;
    });
   }

  ngOnInit(): void {
  }

}
