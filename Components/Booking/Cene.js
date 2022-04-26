export default function Cene(props) {
    return (
        <div>
            {
                props.cena.map((item, i) => {
                    return (
                        <div className="td" key={i}>{item}</div>
                    )
                })
            }
        </div >
    )
}