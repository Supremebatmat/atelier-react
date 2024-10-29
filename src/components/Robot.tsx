import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Robot.css";

function Robot() {
	const data = [
		{
			id: 1,
			Images: "src/spot.jpg",
			title: "Spot",
			text: " Spot est un robot quadrupède, pesant environ 25 kg et capable de naviguer sur des terrains difficiles. Il est utilisé pour des tâches autonomes dans des domaines variés comme l'inspection industrielle et la sécurité.",
		},

		{
			id: 2,
			Images: "src/atlas.jpg",
			title: "Atlas",
			text: "Atlas, le robot humanoïde, mesure 1,80 mètre et pèse 80 kg. Il est capable de marcher, courir et s'adapter à divers environnements, destiné à des missions de sauvetage et d'assistance.",
		},

		{
			id: 3,
			Images: "src/handle.jpg",
			title: "Handle",
			text: "Handl est un robot de Boston Dynamics destiné au chargement et déchargement de colis dans des environnements industriels. Il combine mobilité sur roues et bras articulés pour effectuer des tâches logistiques de manière autonome.",
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
