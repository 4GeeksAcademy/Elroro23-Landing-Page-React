import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mb-2 mt-5">
				<Jumbotron />
				<div className="row mt-5">
					<Cards title="Farm in the countryside" description="Brisket sirloin beef, drumstick cow picanha frankfurter andouille filet mignon turducken. Beef ham capicola jerky beef ribs. Kielbasa doner chislic biltong tongue kevin, jerky turkey drumstick." src="https://www.blogdelfotografo.com/wp-content/uploads/2016/01/Usa-filtros.jpg" alt="Farm in the countryside" />
					<Cards title="My Safe Place" description="Tenderloin ham hock filet mignon beef kevin picanha bresaola t-bone shankle doner andouille burgdoggen. Chuck cupim biltong alcatra. T-bone biltong short ribs pig bacon alcatra sirloin. " src="https://th.bing.com/th/id/R.8b308f2855b5511f027db7575c305f4f?rik=EkOzxiuz7urlxQ&riu=http%3a%2f%2fvivre-de-la-photo.fr%2fwp-content%2fuploads%2f2020%2f01%2ftree-753069_1920.jpg&ehk=wEAm8PsMYPP%2fmRNDiK0SUnfruJhq2yGBEw1%2fSG0xCTo%3d&risl=&pid=ImgRaw&r=0" alt="Tree and bench" />
					<Cards title="Northern Lights" description="Shankle ham turducken drumstick shoulder. Spare ribs frankfurter turducken andouille shoulder. Chuck cupim biltong alcatra. T-bone biltong short ribs pig bacon alcatra sirloin." src="https://th.bing.com/th/id/OIP.aQw4Sg4MldAuCvOBcBFJ5gHaE8?rs=1&pid=ImgDetMain" alt="Northern Lights" />
					<Cards title="Beach" description="Tenderloin ham hock filet mignon beef kevin picanha bresaola t-bone shankle doner andouille burgdoggen. Shankle ham turducken drumstick shoulder." src="https://th.bing.com/th/id/OIP.7-awFD9M7iC2-Wkmi7oi-gHaE8?rs=1&pid=ImgDetMain" alt="Beach" />
				</div>
			</div>
			<Footer />
		</>

	);
};

export default Home;
