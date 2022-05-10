import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './player.actions';
import { Player, PlayerState, Track } from './player.reducer';
import { getPlayer, getSelectedTrack, getTrackProgress, getTrackProgressPercent, getTracks, isCurrentPlaying, isLoadingTracks, soundIsOn } from './player.selectors';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public loadingTracks$: Observable<boolean>;
  public player: Player | null = null;
  public tracks$: Observable<Track[]>;
  public selectedTrack$: Observable<Track | null>;
  public isCurrentPlaying$: Observable<boolean>;
  public soundIsOn: boolean = false;
  public trackProgress$: Observable<string>;
  public trackProgressPercent$: Observable<number>;

  constructor(private store: Store<PlayerState>) {
    this.loadingTracks$ = this.store.select(isLoadingTracks);
    this.tracks$ = this.store.select(getTracks);
    this.store.select(getPlayer)
      .subscribe(player => this.player = player);
    this.selectedTrack$ = this.store.select(getSelectedTrack);
    this.isCurrentPlaying$ = this.store.select(isCurrentPlaying);
    this.store.select(soundIsOn).subscribe(on => {
      this.soundIsOn = on;
    });
    this.trackProgress$ = this.store.select(getTrackProgress);
    this.trackProgressPercent$ = this.store.select(getTrackProgressPercent);
  }

  public ngOnInit(): void {
    this.store.dispatch(actions.fetchTracks());
  }

  public onTrackProgressBarClicked(event: any): void {
    const progressPercent = event.clientX / event.target.clientWidth;
    this.store.dispatch(actions.setTrackProgress({
      progressPercent
    }));
  }

  public selectTrack(track: Track): void {
    this.store.dispatch(actions.selectTrack({ track }));
  }

  public toggleVolume(): void {
    this.store.dispatch(actions.toggleVolume({ soundIsOn: this.soundIsOn }))
  }

  public togglePlay(isCurrentlyPlaying: boolean): void {
    this.store.dispatch(actions.togglePlay({ isCurrentlyPlaying }));
  }
}
