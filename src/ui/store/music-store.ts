import { create } from 'zustand'

export interface Song {
    songName: string;
    songLink: string;
    songImage: string;
    singers: string[];
    music: string[];
    lyrics: string[];
    currentState: string; // play, pause
}

export interface SongState {
    song: Song | null;
    setSong: (song: Song) => void;
    toggleSongState: (nextState: string) => void;
}

export const useSongStore = create<SongState>()((set, get) => ({
    song: null,
    setSong: (nextSong: Song) => set({ song: nextSong }),
    toggleSongState: (nextState: string) => {
        const currentSong = get().song;
        set({ song: currentSong === null ? null : { ...currentSong, currentState: nextState } })
    }
}));