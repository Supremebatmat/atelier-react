import "./Header.css";

function Header() {
	return (
		<header>

			<img className="logo" src="src\components\logo.svg" alt="" />
			<img
				className="logoBoston"
				src="src\components\Logo-boston-dynamics.svg"
				alt=""
			/>
      
			<h1>Projet de groupe React</h1>
		</header>
	);
}

export default Header;
