import CappadociaImg from '../assets/Cappadocia.jpg'
import IstanbulImg from "../assets/Istanbul.jpg"
import TaipeiImg from "../assets/Taipei.jpg"
import HanoiImg from "../assets/Hanoi.jpg"

const imagesMap = {
    Cappadocia: CappadociaImg,
    Istanbul: IstanbulImg,
    Taipei: TaipeiImg,
    Hanoi: HanoiImg
}


export default function Destination(props) {
    const imgSrc = imagesMap[props.destination.locationName]

    return (
        <section className="destination">
            <img src={imgSrc} 
            alt={props.destination.locationName}
            className='destination--img'
            />
            <div className="destination--details">
                <div className="location--details">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>{props.destination.country.toUpperCase()}</h4>
                    <p><a href={props.destination.googleMapsLink} target='_blank'>View on Google Maps</a></p>
                </div>
                <h1 className="destination--name">{props.destination.locationName}</h1>
                <h3 className="destination--date">{props.destination.fromDate} - {props.destination.toDate}</h3>
                <p className="destination--description">{props.destination.locationDescription}</p>
            </div>
        </section>
    )
}
