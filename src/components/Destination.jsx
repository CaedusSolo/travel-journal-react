import cappadocia_img from '../assets/Cappadocia.jpg'

export default function Destination(props) {
    return (
        <section className="destination">
            <img src={cappadocia_img} 
            alt="Cappadocia"
            className='destination--img'
            />
            <div className="destination--details">
                <div className="location--details">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>TURKIYE</h4>
                    <p><a href="https://google.com" target='_blank'>View on Google Maps</a></p>
                </div>
                <h1 className="destination--name">Cappadocia</h1>
                <h3 className="destination--date">3 June, 2023 - 6 June, 2023</h3>
                <p className="destination--description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, minus.</p>
            </div>
        </section>
    )
}
