import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

//create your first component
const Home = () => {
	return (
		
			<div className="d-flex flex-column min-vh-100"> {/* SE AÑADIÓ "d-flex flex-column min-vh-100" para que ocupase toda la página y el footer quedase abajo */}

				<Navbar/>

				 <div className="container flex-grow-1"> {/* SE AÑADIÓ "flex-grow-1" para que el flexbox usase el espacio y empujase el footer */}

					<Jumbotron/>					

					<div className="container my-4">

						<div className="row g-3 justify-content-center">

							<div className="col-auto">
								<Card />
							</div>

							<div className="col-auto">
								<Card />
							</div>
							
							<div className="col-auto">
								<Card />
							</div>

							<div className="col-auto">
								<Card />
							</div>

						</div>
					</div>

				</div>


				<Footer/>

			</div>

		
	);
};

export default Home;