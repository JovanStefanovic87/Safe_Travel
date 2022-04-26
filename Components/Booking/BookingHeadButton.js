export default function BookingHeadButton(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            <label style={{ display: props.style1 }}>{props.title1}<props.icon1 /></label>
            <label style={{ display: props.style2 }}>{props.title2}<props.icon2 /></label>
        </div>
    )
}