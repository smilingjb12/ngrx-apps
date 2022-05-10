import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, ObservableInput, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AudioService } from "./audio.service";
import * as actions from "./player.actions";
import { Track } from "./player.reducer";
import { TracksApiService } from "./tracks-api.service";

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private tracksApiService: TracksApiService,
    private audioService: AudioService
  ) {
  }

  public fetchTracks$ = createEffect(() => this.actions$.pipe(
    ofType(actions.fetchTracks),
    mergeMap(() => {
      return this.tracksApiService.getTracks().pipe(
        map((tracks: Track[]) => actions.fetchTracksSuccess({ tracks })),
        catchError(() => of(actions.fetchTracksFailure()))
      )
    }))
  );

  public playAudio$ = createEffect(() => this.actions$.pipe(
    ofType(actions.selectTrack),
    switchMap(action => {
      this.audioService.startPlaying(action.track.filePath);
      return EMPTY as ObservableInput<any>;
    })
  ));

  public toggleAudioPlay$ = createEffect(() => this.actions$.pipe(
    ofType(actions.togglePlay),
    switchMap(action => {
      if (action.isCurrentlyPlaying) {
        this.audioService.pause();
      } else {
        this.audioService.resume();
      }
      return EMPTY as ObservableInput<any>;
    })
  ));

  public setVolume$ = createEffect(() => this.actions$.pipe(
    ofType(actions.toggleVolume),
    switchMap(action => {
      if (action.soundIsOn) {
        this.audioService.setVolume(0);
      } else {
        this.audioService.setVolume(1);
      }
      return EMPTY as ObservableInput<any>;
    })
  ));

  public rewind$ = createEffect(() => this.actions$.pipe(
    ofType(actions.setTrackProgress),
    switchMap(action => {
      this.audioService.rewindTo(action.progressPercent);
      return EMPTY as ObservableInput<any>;
    })
  ));
}