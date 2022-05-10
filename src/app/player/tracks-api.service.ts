import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Track } from './player.reducer';

@Injectable({
  providedIn: 'root'
})
export class TracksApiService {

  constructor() { }

  public getTracks(): Observable<Track[]> {
    return of([
      {
        id: 1,
        title: 'Vinta',
        artist: 'Crumb',
        albumCoverPath: '/assets/tracks/ab67616d0000b27381ba6b8313211bef29a4cf6d.jpg',
        filePath: '/assets/tracks/crumb - vinta.mp3',
        duration: 300
      },
      {
        id: 2,
        title: 'Flutter',
        artist: 'Julie',
        albumCoverPath: '/assets/tracks/dfed457ca328df02910c2c90c6b08a53.jpg',
        filePath: '/assets/tracks/flutter.mp3',
        duration: 267
      },
      {
        id: 3,
        title: 'Dark Red',
        artist: 'Steve Lacy',
        albumCoverPath: '/assets/tracks/sasfhdsfhrhdrhdrh.png',
        filePath: '/assets/tracks/steve-lacy-dark-red.mp3',
        duration: 174
      },
      {
        id: 4,
        title: 'Flutter',
        artist: 'Julie',
        albumCoverPath: '/assets/tracks/dfed457ca328df02910c2c90c6b08a53.jpg',
        filePath: '/assets/tracks/flutter.mp3',
        duration: 267
      },
      {
        id: 5,
        title: 'Vinta',
        artist: 'Crumb',
        albumCoverPath: '/assets/tracks/ab67616d0000b27381ba6b8313211bef29a4cf6d.jpg',
        filePath: '/assets/tracks/crumb - vinta.mp3',
        duration: 300
      },
    ]).pipe(delay(1200));
  }
}
