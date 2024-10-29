import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Robot.css";

function Robot() {
	const data = [
		{
			id: 1,
			Images: "src/spot.jpg",
			title: "Spot",
			text: " Le mignon robot Spotou",
		},

		{
			id: 2,
			Images: "src/atlas.jpg",
			title: "Atlas",
			text: "Le mignon robot Atlas",
		},

		{
			id: 3,
			Images: "src/handle.jpg",
			title: "Handle",
			text: "Le mignon robot Handle",
		},
	];

	return (
		<>
			<Carousel
				autoPlay
				interval={3000}
				infiniteLoop
				thumbWidth={120}
				showIndicators={false}
			>
				{data.map((slide) => (
					<div key={slide.id}>
						<img src={slide.Images} alt="" />
						<div className="overlay">
							<h2 className="overlay-title">
								{slide.title}
								<p className="overlay-text">{slide.text}</p>
							</h2>
						</div>
					</div>
				))}
			</Carousel>
		</>
	);
}

export default Robot;
