import React from "react";

//include images into your bundle
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Card from "./Card"

//create your first component
const Home = () => {
	return (
		<Navbar/>,
		<Jumbotron/>,
		<Card/>
	);
};

export default Home;
