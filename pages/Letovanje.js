import Layout from "../Components/Layout/Layout"
import HeaderNav from "../Components/HeaderNav/HeaderNav"
import Footer from "../Components/Footer/Footer"

export default function Letovanje() {
    return(
        <>
            <Layout title="Letovanje"/>
            <HeaderNav 
                home="passive fa fa-home"
                letovanje="active"
                metropole="passive"
                kontakt="passive"
            />
            <Footer />
        </>
    )
}