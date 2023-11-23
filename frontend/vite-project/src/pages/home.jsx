import AboutUs from "../components/layout/sections/AboutUs.jsx";
import NavBar from "../components/layout/Navbar.jsx"
import Hero from "../components/layout/sections/Hero.jsx";
import  Card  from "../components/layout/sections/Card.jsx";
import Footer from "../components/layout/sections/Footer.jsx";
import Engage from "../components/layout/sections/Engage.jsx";
function Home(){
	return(
		<>
		<div>
			<NavBar/>
			<Hero/>
			<AboutUs/>
			<Card/>
			<Engage/>
			<Footer/>
		</div>

		</>
	)
    
}
export default Home;