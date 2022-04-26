import SpecialOffersStruct from "./SpecialOffersStruct"

export default function LastMinute() {
    return(
        <div className="SpOffers-container">
            <div className="SpOffers-head">Last Minute ponude</div>
            <SpecialOffersStruct 
                img="https://piano-travel.rs/wp-content/uploads/2018/08/hilton-resort-hurgada-piano-travel-1.jpg"
                descriptionstrong="Hurgada, 10 i 11 noći - AVION"
                description="POPUST do 52%. važi do 15.05.2021. - GRATIS smeštaj za dvoje dece!..."
                price="Od 380&euro;"/><hr className="diveder"></hr>
            <SpecialOffersStruct
                img="https://cms.odeontravel.rs/b2cImages/GR%C4%8CKA/Halkidiki/Halkidiki-grcka-letovanje.jpg"
                descriptionstrong="Kemer - AVION"
                description="POPUST do 35% važi do 15.05.2021. Kemer je letovalište okruženo..."
                price="Od 420&euro;"/><hr className="diveder"></hr>
            <SpecialOffersStruct
                img="https://www.greektravel.com/greekislands/lefkada/lefkada-beach.jpg"
                descriptionstrong="Lefkada - autobus 5, 10 i 15 noći"
                description="POPUST 10% važi do 15.05.2021. Lefkada je ostrvo jonskog arhipelaga,..."
                price="Od 180&euro;"/><hr className="diveder"></hr>
        </div>
    )
}