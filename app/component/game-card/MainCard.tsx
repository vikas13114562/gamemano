import Image from 'next/image'
import './game.css'
import PlayingStatus from './utils/currentPlaying'
import LaunchDate from './utils/launchDate'
import PlayNowBtn from './utils/playNowBtn'
import { MainCardProps } from './utils/allData'
const MainCard = (props:MainCardProps)=>{
    const {heading,date,isCover,paragraph} = props
    return (
        <div className={isCover ? "main-card1":"main-card"}>
            <PlayingStatus />
            <div className={`main-heading ${isCover ? 'animated':""}`}>
                {heading}
            </div>
            <div className={`${isCover ? 'animated':""}`}>
            <LaunchDate dateText={date} /></div>
            <p className={`paragraph ${isCover ? 'animated-paragraph':""}`}>
                {paragraph}
            </p>
            <div className={`card-btn dfc ${isCover ? 'animated':""}`}>
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