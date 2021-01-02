import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() data: any[] = [];
  constructor(private misRutas: Router) {
  }
  verArtista(item: any): void {
    //console.log(item);
    let idArtista = '';
    if (item.type === 'artist') {
      idArtista = item.id;
    } else {
      idArtista = item.artists[0].id;
    }
    //console.log(idArtista);
    this.misRutas.navigate(['/artista', idArtista]);
  }
}
