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
		<>
			<Navbar/>

			<div className="container">

				<Jumbotron/>

				<div className="d-flex justify-content-around my-4">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
				
			</div>

			<Footer/>

		</>
	);
};

export default Home;