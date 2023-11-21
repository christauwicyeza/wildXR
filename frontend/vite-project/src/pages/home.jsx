import AboutUs from "../components/layout/sections/AboutUs";
import NavBar from "../components/layout/Navbar"
import Hero from "../components/layout/sections/Hero";
function Home(){
	return(
		<>
		<div>
			<NavBar/>
			<Hero/>
			<AboutUs/>
		</div>

		</>
	)
    
}
export default Home;