
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  albums: any[] = [];
  constructor(private mySerSpoty: SpotifyService){
    mySerSpoty.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.albums = data;
      console.log(this.albums);
    });
  }
}
