import { create } from 'zustand'

export interface Song {
    songName: string;
    songLink: string;
    songImage: string;
    singers: string[];
    music: string[];
    lyrics: string[];
    currentState: string; // play, pause
    currentTiming: number;
    totalTiming: number;
}

export interface SongState {
    song: Song | null;
    setSong: (song: Song) => void;
    toggleSongState: (nextState: string) => void;
    updateTiming: (updatedTiming: number) => void;
    updateTotalTiming: (totalTime: number) => void;
}

export const useSongStore = create<SongState>()((set, get) => ({
    song: null,
    setSong: (nextSong: Song) => set({ song: nextSong }),
    toggleSongState: (nextState: string) => {
        const currentSong = get().song;
        set({ song: currentSong === null ? null : { ...currentSong, currentState: nextState } })
    },
    updateTiming: (updatedTiming: number) => {
        const currentSong = get().song;
        if(currentSong !== null) {
            set({ song: { ...currentSong, currentTiming: updatedTiming } })
        }
    },
    updateTotalTiming: (totalTime: number) => {
        const currentSong = get().song;
        if(currentSong !== null) {
            set({ song: { ...currentSong, totalTiming: totalTime } })
        }
    }
}));