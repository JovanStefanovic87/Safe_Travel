export default function BookingListMob(props) {
    return (
        <>
            {props.izborsmestaja.map((item, i) => {
                return (
                    <div className="trbMob" key={i}>
                        <div className="td">{item}</div>
                    </div>
                );
            })}
        </>
    )
}