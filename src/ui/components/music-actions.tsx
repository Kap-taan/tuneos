import { CircleArrowLeft, CircleArrowRight, CirclePause, CirclePlay } from "lucide-react";
import { useSongStore } from "../store/music-store";

const MusicActions = () => {

    const currentState = useSongStore(store => store.song?.currentState);
    const togglePlayState = useSongStore(store => store.toggleSongState);

    const playPauseHandler = (type: string) => {
        togglePlayState(type);
    }

    return (
        <ul className="menu menu-vertical lg:menu-horizontal w-full py-3 justify-around bg-base-200 rounded-2xl">
            <p className="flex justify-center cursor-pointer"><CircleArrowLeft /></p>
            {currentState === "pause" && <p onClick={() => playPauseHandler("play")} className="flex justify-center cursor-pointer"><CirclePlay /></p>}
            {currentState === "play" && <p onClick={() => playPauseHandler("pause")} className="flex justify-center cursor-pointer"><CirclePause /></p>}
            <p className="flex justify-center cursor-pointer"><CircleArrowRight /></p>
        </ul>
    );
}

export default MusicActions;