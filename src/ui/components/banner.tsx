import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

const Banner = () => {
    return (
        <div className="bg-gradient-to-b from-rose-600 via-pink-600 via-25% to-transparent to-100%">
            <div className="px-10 py-5">
                <div className="flex gap-2">
                    <div className="rounded-4xl p-1 cursor-pointer bg-[#121212c9]"><LeftArrow /></div>
                    <div className="rounded-4xl p-1 cursor-pointer bg-[#121212c9]"><RightArrow /></div>
                </div>
                <div>

                </div>
            </div>
            <div className="flex p-10">
                <div className="">
                    <img className="w-72" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic126%2Fv4%2F8a%2F89%2Fe4%2F8a89e445-d2c6-f8ac-a828-27818b0c1afe%2F859749638209_cover.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=a5fae1d99fce85e5f265a4a684ccc93974c10505c4f17cad681f59c710d5f9a7" alt="Album Art" />
                </div>
                <div className="flex-1 flex flex-col place-content-end pb-3 pl-5">
                    <div className="font-medium text-sm">PUBLIC PLAYLIST</div>
                    <div className="mb-8 font-extrabold text-6xl">MOON CHILD ERA</div>
                    <div className="mb-2">Diljit Dosanjh, Intense</div>
                    <div className="flex justify-between items-center">
                        <div>Made for <span className="font-bold">chillvibers</span></div>
                        <p className="font-light text-sm"><span>34 songs, 2hr 01 min</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;