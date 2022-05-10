import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlayerState } from "./player.reducer";

export const getState = createFeatureSelector<PlayerState>('player');

export const isLoadingTracks = createSelector(
  getState,
  state => state.library.isLoading
);

export const getTracks = createSelector(
  getState,
  state => state.library.tracks
);

export const getPlayer = createSelector(
  getState,
  state => state.player
);

export const getSelectedTrack = createSelector(
  getState,
  state => state.selectedTrack
);

export const isCurrentPlaying = createSelector(
  getState,
  state => state.player.isPlaying
);

export const soundIsOn = createSelector(
  getState,
  state => state.player.volume > 0
);

export const getTrackProgress = createSelector(
  getSelectedTrack,
  getPlayer,
  (track, player) => {
    const current = player.currentSecond;
    const total = track?.duration ?? 0;

    const getMinutes = (duration: number) => parseInt(String(duration / 60));
    const getSeconds = (duration: number) => duration % 60;
    const getTime = (duration: number) => `${String(getMinutes(duration)).padStart(2, '0')}:${String(getSeconds(duration)).padStart(2, '0')}`;

    return `${getTime(current)} - ${getTime(total)}`;
  }
);

export const getTrackProgressPercent = createSelector(
  getSelectedTrack,
  getPlayer,
  (track, player) => {
    const currentSecond = player.currentSecond;
    const total = track?.duration!;

    return Math.round(currentSecond / total * 100.0);
  }
)

