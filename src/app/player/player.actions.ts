import { createAction, props } from "@ngrx/store";
import { Track } from "./player.reducer";

export enum PlayerActions {
  FetchTracks = 'Fetch tracks',
  FetchTracksSuccess = 'Fetch tracks success',
  FetchTracksFailure = 'Fetch tracks failure',
  TogglePlay = 'Toggle play',
  SelectTrack = 'Select track',
  ToggleVolume = 'Toggle Volume',
  ResetTrackProgress = 'Reset track progress',
  UpdateTrackProgress = 'Update track progress',
  setTrackProgress = 'Set track progress'
}

export const fetchTracks = createAction(
  PlayerActions.FetchTracks
);

export const fetchTracksSuccess = createAction(
  PlayerActions.FetchTracksSuccess,
  props<{ tracks: Track[] }>()
);

export const fetchTracksFailure = createAction(
  PlayerActions.FetchTracksFailure
);

export const togglePlay = createAction(
  PlayerActions.TogglePlay,
  props<{ isCurrentlyPlaying: boolean }>()
);

export const selectTrack = createAction(
  PlayerActions.SelectTrack,
  props<{ track: Track }>()
);

export const toggleVolume = createAction(
  PlayerActions.ToggleVolume,
  props<{ soundIsOn: boolean; }>()
);

export const updateTrackProgress = createAction(
  PlayerActions.UpdateTrackProgress,
  props<{ currentSecond: number }>()
);

export const setTrackProgress = createAction(
  PlayerActions.setTrackProgress,
  props<{ progressPercent: number }>()
);
