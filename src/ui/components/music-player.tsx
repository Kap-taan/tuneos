import { useCallback, useEffect, useRef, useState } from "react";
import { useSongStore } from "../store/music-store";
import MusicActions from "./music-actions";
import ProgressBar from "./progress-bar";

const MusicPlayer = () => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [progressPercentage, setProgressPercentage] = useState<string>("0");

    // Store data
    const song = useSongStore((store) => store.song);
    const updateTiming = useSongStore((store) => store.updateTiming);

    const updateProgress = useCallback(() => {
        const tempProgress = Math.ceil(((audioRef?.current?.currentTime ?? 0) / (audioRef?.current?.duration ?? 1)) * 100).toString();
        setProgressPercentage(tempProgress);
        updateTiming(Number(tempProgress));
    }, [updateTiming]);

    useEffect(() => {
        const interval = setInterval(() => updateProgress(), 500);
        return () => clearInterval(interval);
    }, [song, updateProgress]);

    useEffect(() => {
        if(song?.currentState === "play") {
            audioRef.current?.play();
        }
        else
            audioRef.current?.pause();

    }, [song?.currentState, song])

    return (
        <>
        {song !== null && <div className="card shadow-lg relative bg-base-100 h-fit">
            <audio ref={audioRef} src={song?.songLink}  />
            <div className="avatar flex items-center justify-center">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 animate-bounce">
                    <img src={song?.songImage} />
                </div>
            </div>
            <div className="card-body justify-end z-10">
                <div>
                    <h2 className="card-title text-white text-xl font-bold">{song?.songName}</h2>
                    <p className="text-sm text-gray-200">{song?.singers.toString()}</p>
                </div>
                <ProgressBar progressValue={progressPercentage} />
                <div className="card-actions mt-4 flex bg-transparent items-center justify-center">
                    <MusicActions />
                </div>
            </div>
        </div>}
        </>
    );
}

export default MusicPlayer;