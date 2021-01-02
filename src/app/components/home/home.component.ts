
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  loading = true;
  albums: any[] = [];
  error: boolean;
  dataError: object;
  constructor(private mySerSpoty: SpotifyService){
    this.error = false;
    this.dataError = {};
    mySerSpoty.getNewReleases().subscribe((data: any) => {
      // console.log(data);
      this.albums = data;
      // console.log(this.albums);
      this.loading = false;
      this.error = false;
    }, ({error}: any) => {
      this.error = true;
      this.dataError = error.error;
      // console.log(this.dataError);
      this.loading = false;
    });
  }
}
