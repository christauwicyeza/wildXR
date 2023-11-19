import aboutUs from "../components/layout/sections/AboutUs";
import NavBar from "../components/layout/Navbar"
import Hero from "../components/layout/sections/Hero";
function Home(){
	return(
		<>
		<div>
			<NavBar/>
			<Hero/>
			<aboutUs/>
		</div>

		</>
	)
    
}
export default Home;