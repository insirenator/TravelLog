import React from 'react';
import locationIcon from '../images/location.png';
import '../styles/card_style.css';

const Card = (props) => {
	return (
		<section className = "location-card">

			<img className="location-image" src={props.image}/>

			<div className="location-info">

				<div className="location-info--topbar">
					<img className="loc-icon" src={locationIcon}/>
					<p className="loc-country">{props.country}</p>
					<a href="" className="loc-link">View on Google Maps</a>
				</div>

				<h1 className="loc-name">{props.name}</h1>
				<p className="loc-visitdate">{props.visitDate}</p>
				<p className="loc-desc">{props.description}</p>
			</div>
		</section>	
	);
}

export default Card;