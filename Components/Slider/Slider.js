import { useState } from 'react';
import Link from 'next/link';
import GalleryItems from '../Gallery/GalleryItems';
import Arrow from '../UI/Arrow';

export default function Slider({ slides }) {
	const [newActive, setNewActive] = useState('slide-auto');
	const [prevActive, setPrevActive] = useState('slide-old');
	const [curr, setCurr] = useState(0);
	const [timer, setTimer] = useState(true);
	const sycle = slides.length;

	function autoSlide() {
		if (timer === true) {
			setCurr(curr === sycle - 1 ? 0 : curr + 1);
		} else {
			clearInterval(autoSlide);
		}
	}
	React.useEffect(() => {
		const intervalID = setInterval(autoSlide, 8000);
		if (timer === true) {
			intervalID;
		}
		return () => {
			clearInterval(intervalID);
		};
	});

	function First() {
		setCurr(0);
		setPrevActive('slide-new');
		setNewActive('slide-picker');
		setTimer(false);
	}

	function Second() {
		setCurr(1);
		setPrevActive('slide-new');
		setNewActive('slide-picker');
		setTimer(false);
	}

	function Third() {
		setCurr(2);
		setPrevActive('slide-new');
		setNewActive('slide-picker');
		setTimer(false);
	}

	function showPrev() {
		setTimer(false);
		setNewActive('slide-prev');
		setPrevActive('slide-old');
		setCurr(curr < 1 ? 2 : curr - 1);
	}

	function showNext() {
		setTimer(false);
		setNewActive('slide-next');
		setPrevActive('slide-old');
		setCurr(curr === sycle - 1 ? 0 : curr + 1);
	}

	return (
		<section className="Slider-Container">
			{slides.map((s, i) => {
				return (
					<div className={i === curr ? newActive : prevActive} key={s.id}>
						<Link href={slides[curr].link}>
							<a>
								<img src={s.image} alt={s.title}></img>
							</a>
						</Link>
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
			<div className="radioContainer">
				<label htmlFor="firstradio" className="radiolbl">
					<input
						type="radio"
						name="slider"
						id="firstradio"
						onClick={First}
						defaultChecked={curr === 0}></input>
					<span className="checkmark"></span>
				</label>
				<label htmlFor="secondradio" className="radiolbl">
					<input
						type="radio"
						name="slider"
						id="secondradio"
						onClick={Second}
						defaultChecked={curr === 1}></input>
					<span className="checkmark"></span>
				</label>
				<label htmlFor="thirdradio" className="radiolbl">
					<input
						type="radio"
						name="slider"
						id="thirdradio"
						onClick={Third}
						defaultChecked={curr === 2}></input>
					<span className="checkmark"></span>
				</label>
			</div>
		</section>
	);
}
