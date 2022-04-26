import window from 'global';
import { useState, useRef } from 'react';
import BookingStruct from '../Booking/BookingStruct';
import Arrow from '../UI/Arrow';

export default function GalleryStruct(props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [newActive, setNewActive] = useState('slide-start');
	const [prevActive, setPrevActive] = useState('slide-old');
	const [fade, setFade] = useState('fadeOff');
	const [fullscreen, setFullscreen] = useState('fullscreenOff');
	const ref = useRef('');
	const refSlider = useRef('');

	const getWidth = ref.current.clientWidth;
	const getWidthSlider = refSlider.current.clientWidth;
	const totalSlides = props.obj.length;

	var vw = window.innerWidth;
	var unit = 0.9 * vw;

	function thumbClick(e) {
		const newActiveIndex = e.target.getAttribute('src');
		let findIndex = props.obj
			.map(function (item) {
				return item;
			})
			.indexOf(newActiveIndex);
		setCurrentIndex(findIndex);
		setNewActive('slide-next');
		setPrevActive('slide-old');
	}
	function showNext() {
		setNewActive('slide-next');
		setPrevActive('slide-old');
		setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
		if (currentIndex > 2 && currentIndex < totalSlides - 1) {
			refSlider.current.scrollLeft += getWidth;
		} else {
			refSlider.current.scrollLeft = 0;
		}
	}
	function showPrev() {
		setNewActive('slide-prev');
		setPrevActive('slide-old');
		setCurrentIndex(currentIndex < 1 ? totalSlides - 1 : currentIndex - 1);
		if (currentIndex < 1 || currentIndex === '') {
			refSlider.current.scrollLeft += getWidthSlider + 150;
		} else if (currentIndex < totalSlides - 3 && currentIndex > 0) {
			refSlider.current.scrollLeft -= getWidth;
		}
	}
	/*Function for adding duration to scroll on event */
	function sideScroll(element, direction, speed, distance, step) {
		var scrollAmount = 0;
		var slideTimer = setInterval(function () {
			if (direction == 'left') {
				element.scrollLeft -= step;
			} else {
				element.scrollLeft += step;
			}
			scrollAmount += step;
			if (scrollAmount >= distance) {
				window.clearInterval(slideTimer);
			}
		}, speed);
	}
	function scrollRight() {
		sideScroll(
			document.querySelector('#' + 'scroller' + props.id),
			'right',
			30,
			unit,
			50
		);
	}
	function scrollLeft() {
		sideScroll(
			document.querySelector('#' + 'scroller' + props.id),
			'left',
			30,
			unit,
			50
		);
	}
	function displayFullImage() {
		setFade('fadeOn');
		setFullscreen('fullscreenOn');
	}
	function hideFullImage() {
		setFade('fadeOff');
		setFullscreen('fullscreenOff');
	}

	return (
		<>
			<br></br>
			<div className="Gallery-title">
				<h1>{props.descriptionTitle}</h1>
			</div>
			<br></br>
			<br></br>
			<div className="Galerry-large-container">
				<div className="Galerry-large">
					{props.obj.map((item, i) => {
						return (
							<div
								className={i === currentIndex ? newActive : prevActive}
								key={i}>
								<img
									src={item}
									alt={item.title}
									onClick={displayFullImage}></img>
							</div>
						);
					})}
					<Arrow
						divClassName="arrow arrow-left"
						onClick={showPrev}
						anchorClassName="fas fa-angle-left"
					/>
					<Arrow
						divClassName="arrow arrow-right"
						onClick={showNext}
						anchorClassName="fas fa-angle-right"
					/>
				</div>
			</div>
			<div className="Galerry-small">
				<Arrow
					divClassName="arrow arrow-left"
					id="leftButton"
					onClick={scrollLeft}
					anchorClassName="fas fa-angle-left"
				/>
				<div className="Thumbnails">
					<div
						className="slider clearSelection"
						ref={refSlider}
						id={'scroller' + props.id}>
						{props.obj.map((item, i) => {
							return (
								<img
									src={item}
									alt={item.title}
									ref={ref}
									className={
										i === currentIndex ? 'sliderImg-Focus' : 'sliderImg'
									}
									onClick={thumbClick}
									key={i}></img>
							);
						})}
					</div>
				</div>
				<Arrow
					divClassName="arrow arrow-right"
					id="rightButton"
					onClick={scrollRight}
					anchorClassName="fas fa-angle-right"
				/>
			</div>
			<div className="Gallery-description">
				<p>{props.description}</p>
				{props.table.map((obj, i) => {
					return (
						<div key={i}>
							<BookingStruct
								data={obj.data}
								dateStart={obj.dateStart}
								dateEnd={obj.dateEnd}
								head={obj.head}
								izborsmestaja={obj.izborsmestaja}
								tipsmestaja={obj.tipsmestaja}
								cene={obj.cene}
								provera={obj.provera}
								tableagain={obj}
								OnOf="Booking wide"
							/>
						</div>
					);
				})}
			</div>
			<div className={fade} onClick={hideFullImage}></div>
			<div className={fullscreen}>
				<img src={props.obj[currentIndex]} alt="image"></img>
				<i className="fas fa-times closeIcon" onClick={hideFullImage}></i>
			</div>
			{props.table.map((obj, i) => {
				return (
					<div key={i}>
						<BookingStruct
							data={obj.data}
							dateStart={obj.dateStart}
							dateEnd={obj.dateEnd}
							head={obj.head}
							izborsmestaja={obj.izborsmestaja}
							tipsmestaja={obj.tipsmestaja}
							cene={obj.cene}
							provera={obj.provera}
							tableagain={obj}
							OnOf="Booking closely"
						/>
					</div>
				);
			})}
			{props.table.map((obj, i) => {
				return (
					<div key={i}>
						<BookingStruct
							data={obj.data}
							dateStart={obj.dateStart}
							dateEnd={obj.dateEnd}
							head={obj.head}
							izborsmestaja={obj.izborsmestaja}
							tipsmestaja={obj.tipsmestaja}
							cene={obj.cene}
							provera={obj.provera}
							tableagain={obj}
							OnOf="Booking mobBooking"
						/>
					</div>
				);
			})}
		</>
	);
}
