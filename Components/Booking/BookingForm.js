import { useState } from "react";
import GalleryItems from "../Gallery/GalleryItems";
import BookingSelect from "./BookingSelect";

export default function BookingForm(props) {
  const [currIndexSmestaj, setCurrIndexSmestaj] = useState();
  const [currValueSmestaj, setCurrValueSmestaj] = useState(null);
  const [currCenovnaGrupa, setCurrCenovnaGrupa] = useState(null);
  const [currIndexDatum, setCurrIndexDatum] = useState(null);
  const [currCloneDatum, setCurrCloneDatum] = useState("");
  const [currOdrasleOsobe, setCurrOdrasleOsobe] = useState(null);
  const [currDeca, setCurrDeca] = useState(0);
  const [currPrvoDete, setCurrPrvoDete] = useState(0);
  const [currDrugoDete, setCurrDrugoDete] = useState(0);
  const [prvoDeteGod, setPrvoDeteGod] = useState("none");
  const [drugoDeteGod, setDrugoDeteGod] = useState("none");
  const [konacnaCena, setKonacnaCena] = useState(null);

  function getIndexSmestaj() {
    return (
      setCurrIndexSmestaj(props.izborsmestaja.indexOf(event.target.value)),
      setCurrValueSmestaj(event.target.value)
    )
  }

  function getTipSmestaja() {
    switch (props.tipsmestaja.indexOf(event.target.value)) {
      case 0:
        setCurrCenovnaGrupa("ceneS2");
        break;
      case 1:
        setCurrCenovnaGrupa("ceneS4");
        break;
    }
  }

  function getDatum() {
    return setCurrIndexDatum(props.izbordatumaStart.indexOf(event.target.value))
  }

  function CloneIndexDatum() {
    let doDatuma =
      GalleryItems[0]["table"][0]["provera"][0]["izbordatumaEnd"][
      currIndexDatum]
    return setCurrCloneDatum(doDatuma)
  }

  function getOdrasleOsobe() {
    return setCurrOdrasleOsobe(event.target.value)
  }

  function getBrojDece(event) {
    switch (event.target.value) {
      case "0":
        setPrvoDeteGod("none")
        setDrugoDeteGod("none")
        setCurrPrvoDete(0)
        setCurrDrugoDete(0)
        break
      case "1":
        setPrvoDeteGod("block")
        setDrugoDeteGod("none")
        setCurrDrugoDete(0)
        break
      case "2":
        setPrvoDeteGod("block")
        setDrugoDeteGod("block")
        break
    }
    return setCurrDeca(event.target.value);
  }

  function getStarost1Deteta() {
    let cena =
      GalleryItems[0]["table"][0]["provera"][0][currCenovnaGrupa][
      currIndexSmestaj
      ]["cena"][currIndexDatum];
    switch (true) {
      case event.target.value <= 3:
        setCurrPrvoDete(0);
        break;
      case event.target.value > 3:
        setCurrPrvoDete(cena / 2);
        break;
      case event.target.value > 12:
        setCurrPrvoDete(cena);
        break;
    }
  }

  function getStarost2Deteta() {
    let cena =
      GalleryItems[0]["table"][0]["provera"][0][currCenovnaGrupa][
      currIndexSmestaj
      ]["cena"][currIndexDatum];
    switch (true) {
      case event.target.value <= 3:
        setCurrDrugoDete(0);
        break;
      case event.target.value > 3:
        setCurrDrugoDete(cena / 2);
        break;
      case event.target.value > 12:
        setCurrDrugoDete(cena);
        break;
    }
  }

  function getKonacnaCena() {
    if (currIndexSmestaj !== null && currCenovnaGrupa !== null && currIndexDatum !== null && currOdrasleOsobe !== null) {
      let cena =
        GalleryItems[0]["table"][0]["provera"][0][currCenovnaGrupa][
        currIndexSmestaj
        ]["cena"][currIndexDatum];
      return setKonacnaCena(
        cena * currOdrasleOsobe + currPrvoDete + currDrugoDete
      );
    } else { alert("Odaberite Smeštaj, Tip smeštaja, Datum i Broj odraslih osoba") }
  }

  return (
    <div className="BookingForm" style={{ display: props.display }}>
      <form name="forma">
        <h1>Provera termina</h1>
        <BookingSelect
          title="Smeštaj:"
          name="forma"
          onChange={getIndexSmestaj}
          array={props.izborsmestaja}
          defaultValue="--Izaberi smeštaj--"
        />
        <BookingSelect
          title="Tip smeštaja:"
          name="forma"
          onChange={getTipSmestaja}
          array={props.tipsmestaja}
          defaultValue="--Izaberi tip smeštaja--"
        />
        <BookingSelect
          title="Datum: Od"
          name="forma"
          onChange={getDatum}
          onBlur={CloneIndexDatum}
          array={props.izbordatumaStart}
          defaultValue="--Izaberi datum polaska--"
        />
        <div className="selectTitle">
          Datum povratka:
            <input type="text" value={currCloneDatum} disabled name="forma"></input>
        </div>
        <select defaultValue="--Izaberi--" onChange={getOdrasleOsobe}>
          <option disabled>--Izaberi--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select onChange={getBrojDece}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input type="number" max="2" placeholder="Prvo dete (godine)" onChange={getStarost1Deteta} style={{ display: prvoDeteGod }} />
        <input type="number" max="2" placeholder="Drugo dete (godine)" onChange={getStarost2Deteta} style={{ display: drugoDeteGod }} />
        <input type="button" value="Proveri" onClick={getKonacnaCena}></input>
        <div className="readonly">{konacnaCena}</div>
      </form>
    </div>
  );
}
