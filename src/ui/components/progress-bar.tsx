import { useSongStore } from "../store/music-store";

const ProgressBar = ({ progressValue } : { progressValue: string }) => {
    
    const updateTiming = useSongStore(store => store.updateTiming);
    const audioRef = useSongStore(store => store.audioRef);

    const progressBarClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const progressBar = event.currentTarget;
        const coordinates = progressBar.getBoundingClientRect();
        const distance = event.clientX - coordinates.left;
        const newWidthPercentage = Math.floor(((distance/coordinates.width)*100));
        updateTiming(newWidthPercentage);
        if (audioRef?.current) {
            const newTimings = Math.floor((newWidthPercentage * audioRef.current.duration) / 100);
            audioRef.current.currentTime = newTimings ?? 0;
        }
    }

    return (
        <progress
            className="progress progress-success w-full mt-2 rounded-2xl cursor-pointer"
            value={progressValue}
            max="100"
            onClick={progressBarClickHandler}
        ></progress>
    );
}

export default ProgressBar;