import window from 'global';
import { useState, useRef } from 'react';
import Cene from './Cene';
import BookingForm from './BookingForm';
import { FiChevronsDown } from 'react-icons/fi';
import { FiChevronsUp } from 'react-icons/fi';
import BookingHeadButton from './BookingHeadButton';
import BookingListMob from './BookingListMob';

export default function BookingStruct(props) {
	const [bookingState, setBookingState] = useState(false);
	const [bookingBody, setBookingBody] = useState('onload');
	const [iconDown, setIconDown] = useState('block');
	const [iconUp, setIconUp] = useState('none');
	const [display, setDisplay] = useState('none');
	const [fade, setFade] = useState('fadeOff');
	const [indexRow, setIndexRow] = useState(0);
	const CloneDiv = useRef(null);
	const cloneHeadScrollLeft = useRef(null);
	const cloneFirstScrollTop = useRef(null);
	const cloneSecondScrollTop = useRef(null);

	var vw = window.innerWidth / 95;
	var unit = 75;

	const dateArrayLength = props.dateStart.length;
	const finalWidth = dateArrayLength * unit;

	function bookingToggler() {
		setBookingState(!bookingState);
		if (bookingState === true) {
			setBookingBody('Close');
		} else {
			setBookingBody('Open');
		}
	}

	function iconToggler() {
		if (bookingState === true) {
			setIconDown('block'), setIconUp('none');
		} else {
			setIconDown('none'), setIconUp('block');
		}
	}

	function scollPos() {
		let div = CloneDiv.current.scrollTop;
		cloneFirstScrollTop.current.scrollTop = div;
		cloneSecondScrollTop.current.scrollTop = div;
	}

	function scollPosHead() {
		let div = CloneDiv.current.scrollLeft;
		cloneHeadScrollLeft.current.scrollLeft = div;
	}

	function displayForm() {
		setDisplay('block');
		setFade('fadeOn');
		document.querySelector('#Metropole').className = 'fixed';
	}

	function hideForm() {
		setFade('fadeOff');
		setDisplay('none');
		document.querySelector('#Metropole').className = 'static';
	}

	/* console.log(indexRow) */

	return (
		<div className={props.OnOf}>
			{props.provera.map((obj, i) => {
				return (
					<BookingForm
						key={i}
						display={display}
						fade={fade}
						izborsmestaja={obj.izborsmestaja}
						tipsmestaja={obj.tipsmestaja}
						izbordatumaStart={obj.izbordatumaStart}
						izbordatumaEnd={obj.izbordatumaEnd}
					/>
				);
			})}
			<BookingHeadButton
				className="head desktopBooking"
				onClick={() => {
					bookingToggler(), iconToggler();
				}}
				style1={iconDown}
				style2={iconUp}
				title1="CENOVNIK"
				title2="CENOVNIK"
				icon1={FiChevronsDown}
				icon2={FiChevronsUp}
			/>
			<BookingHeadButton
				className="head mobBooking"
				onClick={() => {
					bookingToggler(), iconToggler();
				}}
				style1={iconDown}
				style2={iconUp}
				title1="SMEŠTAJ"
				title2="SMEŠTAJ"
				icon1={FiChevronsDown}
				icon2={FiChevronsUp}
			/>
			<div className={bookingBody}>
				{/* Desktop start */}
				<div className="container desktopBooking">
					<div className="table-left">
						<div className="theadleft">
							<div className="trhleft">
								{props.head.map((item, i) => {
									return (
										<div className="th" key={i}>
											{item.firsttHead}
										</div>
									);
								})}
							</div>
						</div>
						<div className="tbodyleft" ref={cloneFirstScrollTop}>
							{props.izborsmestaja.map((item, i) => {
								return (
									<div key={i}>
										<div className="trbleft">
											<div className="td">{item}</div>
										</div>
										<div className="trbleft">
											<div className="td"></div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="table-left">
						<div className="theadleft">
							<div className="trhleft">
								{props.head.map((item, i) => {
									return (
										<div className="th" key={i}>
											{item.secondtHead}
										</div>
									);
								})}
							</div>
						</div>
						<div className="tbodyleft" ref={cloneSecondScrollTop}>
							{props.tipsmestaja.map((item, i) => {
								return (
									<div className="trbleft" key={i}>
										<div className="td">{item}</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="table-right">
						<div className="theadright" ref={cloneHeadScrollLeft}>
							<div className="trhright" style={{ width: finalWidth }}>
								{props.dateStart.map((item, i) => {
									return (
										<div className="th" key={i}>
											{item}
										</div>
									);
								})}
							</div>
							<div className="trhright" style={{ width: finalWidth }}>
								{props.dateEnd.map((item, i) => {
									return (
										<div className="th" key={i}>
											{item}
										</div>
									);
								})}
							</div>
						</div>
						<div
							className="tbodyright"
							ref={CloneDiv}
							onScroll={() => {
								scollPosHead();
								scollPos();
							}}>
							<div className="trbright" style={{ width: finalWidth }}>
								{props.cene.map((obj, i) => {
									return (
										<div key={i}>
											<Cene cena={obj.cena} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<button onClick={displayForm}>Raspoloživost termina</button>
				</div>
				{/* Desktop end */}

				{/* Mob Start */}
				<div className="containerMob mobBooking">
					<div className="tableMob">
						<div className="theadleft">
							<div className="trhleft">
								{props.head.map((item, i) => {
									return (
										<div className="th" key={i}>
											{item.firsttHead}
										</div>
									);
								})}
							</div>
						</div>
						<div className="tbodyMob">
							{props.provera.map((item, i) => {
								return (
									<div key={i}>
										<BookingListMob izborsmestaja={item.izborsmestaja} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
				{/* Mob end */}
			</div>
			<div></div>
			<div className="line"></div>
			<div className={fade} onClick={hideForm}></div>
		</div>
	);
}
