import AboutUs from "../components/layout/sections/AboutUs";
import NavBar from "../components/layout/Navbar"
import Hero from "../components/layout/sections/Hero";
import Footer from "../components/layout/sections/Footer";
function Home(){
	return(
		<>
		<div>
			<NavBar/>
			<Hero/>
			<AboutUs/>
			<Footer/>
		</div>

		</>
	)
    
}
export default Home;