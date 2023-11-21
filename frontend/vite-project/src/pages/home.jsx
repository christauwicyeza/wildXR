import AboutUs from "../components/layout/sections/AboutUs";
import NavBar from "../components/layout/Navbar"
import Hero from "../components/layout/sections/Hero";
import Card from "../components/layout/sections/educationContent";
import Footer from "../components/layout/sections/Footer";
function Home(){
	return(
		<>
		<div>
			<NavBar/>
			<Hero/>
			<AboutUs/>
			<Card/>
			<Footer/>
		</div>

		</>
	)
    
}
export default Home;