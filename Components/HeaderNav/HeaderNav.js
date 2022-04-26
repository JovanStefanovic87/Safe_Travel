import { useState } from "react"
import Link from 'next/link'
import letovanje from "./img/letovanje.jpg";
import metropole from "./img/metropole.jpg";
import home from "./img/home.png";
import kontakt from "./img/kontakt.png";
import logo from "./img/logo.png";

export default function HeaderNav(props) {
    const [isOpen, SetIsOpen] = useState(false);
    const ToggleMenuMob = () => {
        SetIsOpen(!isOpen)
    }
    return(
        <>
            <div className="spacer"></div>
            <header>
                <div className="GridList-container">
                    <Link href="/">
                        <a className={props.home}></a>
                    </Link>
                    <Link href="/letovanje">
                        <a className={props.letovanje}>LETOVANJE</a>
                    </Link>
                    <Link href="/metropole">
                        <a className={props.metropole}>METROPOLE</a>
                    </Link>
                    <Link href="/kontakt">
                        <a className={props.kontakt}>KONTAKT</a>
                    </Link>
                </div>
                <div className="flexBtn-container" onClick={ToggleMenuMob}>
                    <div className="flexBtn-item"></div>
                    <div className="flexBtn-item"></div>
                    <div className="flexBtn-item"></div>
                </div>
                <div className="flex-spacer"></div>
                <div>
                    <Link href="/">
                        <a><img className="logo" src={logo}></img></a>
                    </Link>
                </div>
            </header>
            <div className={isOpen ? "Nav-Container ToggleOpen" : "Nav-Container ToggleClose"}>
                <Link href="/">
                    <a className="Nav-Child"><img src={home} alt="home"></img></a>
                </Link>
                <Link href="/letovanje">
                    <a className="Nav-Child bg-img" style={{backgroundImage: `url(${letovanje})`}}></a>
                </Link>
                <Link href="/metropole">
                    <a className="Nav-Child bg-img" style={{backgroundImage: `url(${metropole})`}}></a>
                </Link>
                <Link href="/kontakt">
                    <a className="Nav-Child"><img src={kontakt} alt="kontakt"></img></a>
                </Link>
            </div>
        </>
    )
}