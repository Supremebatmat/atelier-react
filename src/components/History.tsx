import "./History.css";

function History() {
	return (
		<section className="history-container">
			<h2>Boston Dynamics</h2>
			<p>
				Boston Dynamics, fondée en 1992 par Marc Raibert, est une entreprise de
				robotique célèbre pour ses robots avancés, notamment à usage militaire.
			</p>

			<div className="img-container">
				<img className="boston" src="./src/boston.jpg" alt="" height="280px" />
				<img className="boston" src="./src/boston2.jpg" alt="" height="280px" />
				<img className="boston" src="./src/boston3.jpg" alt="" height="280px" />
			</div>

			<p>
				Après avoir été rachetée par Google en 2013, puis par SoftBank en 2017,
				et enfin par Hyundai en 2020, l'entreprise a évolué vers des
				applications industrielles et commerciales. Aujourd'hui, elle se
				concentre sur la robotique pour des tâches industrielles tout en
				continuant de repousser les limites du mouvement robotique.
			</p>
		</section>
	);
}

export default History;
