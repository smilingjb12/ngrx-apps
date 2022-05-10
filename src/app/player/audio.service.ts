import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateTrackProgress } from './player.actions';
import { Player } from './player.reducer';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private readonly audioSource = new Audio();
  private trackProgressUpdateTimer: any;

  constructor(private store: Store<Player>) {
  }

  public startPlaying(filePath: string): void {
    clearInterval(this.trackProgressUpdateTimer);
    this.audioSource.src = filePath;
    this.audioSource.play();
    this.startTrackProgressUpdateTimer();
  }

  public resume(): void {
    this.audioSource.play();
    this.startTrackProgressUpdateTimer();
  }

  public pause(): void {
    this.audioSource.pause();
    clearInterval(this.trackProgressUpdateTimer);
  }

  public rewindTo(progressPercent: number): void {
    this.audioSource.currentTime = this.audioSource.duration * progressPercent;
  }

  public setVolume(volume: number): void {
    this.audioSource.volume = volume;
  }

  private startTrackProgressUpdateTimer(): void {
    this.emitTrackProgressUpdateEvent();
    this.trackProgressUpdateTimer = setInterval(() => {
      this.emitTrackProgressUpdateEvent();
    }, 1000);
  }

  private emitTrackProgressUpdateEvent(): void {
    const currentSecond = Math.round(this.audioSource.currentTime);
    console.log(currentSecond);
    this.store.dispatch(updateTrackProgress({ currentSecond: parseInt('' + currentSecond) }));
  }
}
