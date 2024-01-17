import Image from 'next/image'
import './game.css'
import PlayingStatus from './utils/currentPlaying'
import LaunchDate from './utils/launchDate'
import PlayNowBtn from './utils/playNowBtn'
const MainCard = ()=>{
    return (
        <div className='main-card'>
            <PlayingStatus />
            <div className='main-heading'>
                Warloards
            </div>
            <LaunchDate dateText={"30TH December"} />
            <p className='paragraph'>
                Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
            </p>
            <div className='card-btn dfc'>
                <PlayNowBtn />
                <Image src="/ios_img.png" width={180} height={50} alt="ios" />
            </div>
            <div className='buy-text'>
                Buy now for 40$ only
            </div>
        </div>
    )
}

export default MainCard