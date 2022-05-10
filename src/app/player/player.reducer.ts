import { createReducer, on } from "@ngrx/store";
import produce from "immer";
import * as actions from "./player.actions";

export interface Library {
  isLoading: boolean;
  tracks: Track[];
}

export interface PlayerState {
  library: Library;
  player: Player;
  selectedTrack: Track | null;
}

export interface Player {
  isPlaying: boolean;
  volume: number;
  currentSecond: number;
}

export interface Track {
  id: number;
  title: string;
  artist: string;
  albumCoverPath: string;
  filePath: string;
  duration: number;
}

const initialState: PlayerState = {
  library: {
    isLoading: false,
    tracks: []
  },
  player: {
    isPlaying: false,
    volume: 1,
    currentSecond: 0
  },
  selectedTrack: null
};

export const playerReducer = createReducer<PlayerState>(
  initialState,
  on(actions.fetchTracks, (state, action) => produce(state, draft => {
    draft.library.isLoading = true;
  })),
  on(actions.fetchTracksSuccess, (state, action) => produce(state, draft => {
    draft.library.tracks = action.tracks;
    draft.library.isLoading = false;
  })),
  on(actions.togglePlay, (state, action) => produce(state, draft => {
    draft.player.isPlaying = !action.isCurrentlyPlaying;
  })),
  on(actions.selectTrack, (state, action) => produce(state, draft => {
    const track = draft.library.tracks.find(t => t.id === action.track.id);
    draft.selectedTrack = track!;
    draft.player.isPlaying = true;
    draft.player.currentSecond = 0;
  })),
  on(actions.toggleVolume, (state, action) => produce(state, draft => {
    draft.player.volume = action.soundIsOn ? 0 : 1;
  })),
  on(actions.updateTrackProgress, (state, action) => produce(state, draft => {
    draft.player.currentSecond = action.currentSecond;
  })),
  on(actions.setTrackProgress, (state, action) => produce(state, draft => {
    const position = state.selectedTrack?.duration! * action.progressPercent;
    draft.player.currentSecond = Math.round(position);
  }))
);

