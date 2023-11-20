import AboutUs from "../components/layout/sections/AboutUs";
import NavBar from "../components/layout/Navbar"
import Hero from "../components/layout/sections/Hero";
function Home(){
	return(
		<>
		<div className="pl-2 pr-2 pb-2 ">
			<NavBar/>
			<Hero/>
			<AboutUs/>
		</div>

		</>
	)
    
}
export default Home;