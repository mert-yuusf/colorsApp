import "./sass/main.scss";
import ColorColumn from "./Components/ColorColumn";

function App() {
	const colors = [
		{
			color: "#3366FF",
			heading: "primary color"
		},
		{
			color: "#51E84C",
			heading: "success color"
		},
		{
			color: "#F7D52E",
			heading: "warning color"
		},
		{
			color: "#FC582A",
			heading: "danger color"
		},

	]

	return (
		<div className="App">
			{/*NAVBAR*/}
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container">
					<a className="navbar-brand fw-bolder fs-3 text-primary" href="/">ColorsApp</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
			{/*NAVBAR*/}

			{/*MAIN*/}
			<main className="container mt-3">
				<div className="row row-cols-md-4 row-cols-lg-4">
					{
						colors.map((color, index) => {
							return <ColorColumn key={index} value={color.color} heading={color.heading}></ColorColumn>
						})
					}
				</div>
			</main>
			{/*MAIN*/}
		</div>
	);
}

export default App;
