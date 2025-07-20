import { useSongStore } from "../store/music-store";

const Table = () => {

    const songs = [
        {
            image: "https://i.ytimg.com/vi/ubRL9SvcpXw/maxresdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FVibe(1).mp3?alt=media&token=7dfc9cba-5722-4cca-bde1-89c0cae4e3fa",
            songName: "Vibe",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "2:40"
        },
        {
            image: "https://i.ytimg.com/vi/Yyr72jjAIKE/maxresdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FCali(1).mp3?alt=media&token=449b5124-be80-459d-8d5e-ee8b58cbe755",
            songName: "Cali",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "3:20"
        },
        {
            image: "https://i.ytimg.com/vi/UpN1swlT1eU/mqdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FChampagne(1).mp3?alt=media&token=4bf367e7-3d1f-4aec-9df3-f0b5fecd1924",
            songName: "Champagne",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "3:20"
        },
        {
            image: "https://i.ytimg.com/vi/PWSMSny9RN0/hqdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FDa%20Crew(1).mp3?alt=media&token=0c42c7bf-8ce8-42cb-aa1c-4d8836912724",
            songName: "Da Crew",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "2:45"
        },
        {
            image: "https://images.genius.com/b653b278a6c4da4bfe14455dd5d96cdc.799x1000x1.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FBlack%20White(1).mp3?alt=media&token=58ae518c-8bc3-4f91-a01f-eef2be72c783",
            songName: "Black and White",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "1:45"
        },
        {
            image: "https://i.ytimg.com/vi/kwhfmFhQ_fc/maxresdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FVoid(1).mp3?alt=media&token=6f97a3bd-2d01-4751-841f-310976cb47ee",
            songName: "Void",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "3:45"
        },
        {
            image: "https://i.ytimg.com/vi/bRUvh1me7wQ/maxresdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FHoops(1).mp3?alt=media&token=bdda2238-ac1b-4a4f-8db6-8804e5ce8df1",
            songName: "Hoops",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "0:45"
        },
        {
            image: "https://static.toiimg.com/photo/msid-85511378/85511378.jpg?69986",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FLover(1).mp3?alt=media&token=c1e39d03-ba43-4a19-8c40-c2a9937041d5",
            songName: "Lover",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "4:45"
        },
        {
            image: "https://i.ytimg.com/vi/OvlmXqd9uBY/maxresdefault.jpg",
            link: "https://firebasestorage.googleapis.com/v0/b/musicplayer-14859.appspot.com/o/Moon%20Child%20Era%2FLuna(1).mp3?alt=media&token=992e410e-b4db-4357-8815-e9600411f2f9",
            songName: "Luna",
            singers: ["Diljit Dosanjh"],
            writer: ["Raj"],
            musicProducer: ["Intense"],
            timing: "2:05"
        },
        
    ];

    const songChanger = useSongStore(store => store.setSong);

    const changeSongHandler = (song: {
    image: string;
    songName: string;
    singers: string[];
    writer: string[];
    musicProducer: string[];
    timing: string;
    link: string;
}) => {
        const songType = {
            songName: song.songName,
            songLink: song.link,
            songImage: song.image,
            singers: song.singers,
            music: song.musicProducer,
            lyrics: song.writer,
            currentState: "play"
        }

        songChanger(songType);

    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th className="font-medium">TITLE</th>
                    <th className="font-medium">ALBUM</th>
                    <th className="font-medium">Favorite</th>
                    <th className="font-medium">TIMING</th>
                </tr>
                </thead>
                <tbody>
                    {songs && songs.map((song, idx) => (
                        <tr className="cursor-pointer" onClick={() => changeSongHandler(song)}>
                            <th>{idx}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={song.image} alt={song.songName} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{song.songName}</div>
                                        <div className="text-sm opacity-50">Diljit Dosanjh, Intense</div>
                                    </div>
                                </div>
                            </td>
                            <td>Moon Child Era</td>
                            <td></td>
                            <th>{song.timing}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;