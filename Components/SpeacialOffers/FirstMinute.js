import SpecialOffersStruct from "./SpecialOffersStruct"

export default function FirstMinute() {
    return(
        <div className="SpOffers-container">
            <div className="SpOffers-head">First Minute ponude</div>
            <SpecialOffersStruct 
                img="https://www.barcelo.com/pinandtravel/wp-content/uploads/2018/06/a1-29-1024x466.jpg"
                descriptionstrong="Karibi, 10 i 11 noći - AVION"
                description="POPUST do 20%. važi do 15.05.2021. - GRATIS smeštaj za jedno dete..."
                price="Od 950&euro;"/><hr className="diveder"></hr>
            <SpecialOffersStruct
                img="https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/dubai/06-route-detail/View-Of-Dubai-Beach-Big-Bus-Tours-01.17.jpg"
                descriptionstrong="Dubai - AVION"
                description="POPUST do 25% važi do 15.05.2021. Doživite čaroliju arapskog sveta..."
                price="Od 820&euro;"/><hr className="diveder"></hr>
            <SpecialOffersStruct
                img="https://www.prestigetravel.rs/images/kusadasirotator.jpg"
                descriptionstrong="Kušadasi - AVION 10 i 15 noći"
                description="POPUST 30% važi do 15.05.2021. Kušadasi se nalazi na severnoj obali Egejskog mora...."
                price="Od 390&euro;"/><hr className="diveder"></hr>
        </div>
    )
}