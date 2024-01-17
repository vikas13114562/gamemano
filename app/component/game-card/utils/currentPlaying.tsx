import Image from "next/image";
import '../game.css'
const PlayingStatus = ()=>{
    return (
        <div className="statusDiv">
            <p className="dfc status-text">
                <div className="greenDot"></div>
                40 of your friends are playing
            </p>
            <div className='dfc'>
                <Image src="/star1.svg" width={20} height={20} alt="star" />
                <Image src="/star1.svg" width={20} height={20} alt="star" />
                <Image src="/star1.svg" width={20} height={20} alt="star" />
                <Image src="/star2.svg" width={20} height={20} alt="star" />
                <Image src="/star2.svg" width={20} height={20} alt="star" />
            </div>
        </div>
    )
}

export default PlayingStatus;