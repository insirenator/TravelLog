import React from 'react';
import ReactDOM from 'react-dom';
import data from './components/data.js';
import Card from './components/card.js';
import Navbar from './components/navbar.js';
import './styles/style.css'


const App = () => {
	const locationData = data.map((item) =>  {
		return (
			<Card 
				key = {item.id}
				image={item.image}
				name = {item.name}
				country = {item.country}
				visitDate = {item.visitDate}
				description = {item.description}
			/>
		);
	});

	console.log(locationData);
	
	return (
		<div>
			<Navbar />
			{locationData}
		</div>
	);
};

const root = document.querySelector('#root');
ReactDOM.render(
	<App />,
	root
);