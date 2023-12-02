import React from "react";
import AboutUs from "../components/sections/AboutUs.jsx";
import NavBar from "../components/layout/Navbar.jsx"
import Hero from "../components/sections/Hero.jsx";
import  Card  from "../components/sections/Card.jsx";
import Footer from "../components/layout/Footer.jsx";
import Engage from "../components/sections/Engage.jsx";
function Home(){
	return(
		<>
		<div>
	
			<Hero/>
			<AboutUs/>
			<Card/>
			<Engage/>
		
		</div>

		</>
	)
    
}
export default Home;