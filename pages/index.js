import Layout from "../Components/Layout/Layout"
import HeaderNav from "../Components/HeaderNav/HeaderNav"
import Footer from "../Components/Footer/Footer"
import Slider from "../Components/Slider/Slider"
import Slides from "../Components/Slider/Slides"
import LastMinute from "../Components/SpeacialOffers/LastMinute"
import FirstMinute from "../Components/SpeacialOffers/FirstMinute"



export default function Index() {
  return (
    <div className="container">
      <Layout title="Početna"/>
        <HeaderNav 
          home="active fa fa-home"
          letovanje="passive"
          metropole="passive"
          kontakt="passive"
        />
      <main>
        <Slider slides={Slides}/>
        <LastMinute />
        <FirstMinute />
      </main>
        <Footer />
    </div>
  )
}