import React from 'react';
import globeIcon from '../images/world.png';
import '../styles/navbar_style.css';

const Navbar = () => {
	return (
		<nav>
			<img className="globe-icon" src = {globeIcon} />
			<p className="title">Travel Log</p>
		</nav>
	);
}

export default Navbar;