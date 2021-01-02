import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  data: any[] = [];
  loading = false;

  constructor(private mySerSpoty: SpotifyService) {
    //console.log('in constructor');
   }

  ngOnInit(): void {
    //console.log('init');
  }

  buscar(termino: any): void{
    //console.log(termino.value);
    this.loading = true;
    this.mySerSpoty.buscarArtista(termino.value).subscribe((data: any) => {
      this.data = data;
      //console.log(this.data);
      this.loading = false;
    });
  }

}
