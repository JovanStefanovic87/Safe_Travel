export default function SpecialOffersStruct(props) {
    return (
        <div className="SpOffers-item" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="SpOffers-context">
                <p><strong>{props.descriptionstrong}</strong></p><hr></hr>
                <p>{props.description}</p>
                <div type="button" className="btnPrice">{props.price}</div>
            </div>
        </div>
    )
}