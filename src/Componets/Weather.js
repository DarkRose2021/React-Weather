import React, { useState, useEffect } from "react";
//component is ra => arrow function

export const Weather = (props) => {
	// let source = []

	return (
		<div>
			{props.weatherData ? (
				<>
					<h2>{props.weatherData.city.name}</h2>
					<div>
						{props.weatherData?.list?.map((weatherInfo) => (
							<>
								<div className="weather">
									<div key={props.weatherData.list.dt}>
										<b>Date:</b> {weatherInfo.dt_txt}
										<br />
										<img src={"/public/images/" + weatherInfo.weather.icon + ".gif"} />
										<br />
										<b>Conditions:</b> {weatherInfo.weather.description} <br />
										<b>Max Temperature:</b> {weatherInfo.main.temp_max} <br />
										<b>Min Temperature:</b> {weatherInfo.main.temp_min} <br />
									</div>
								</div>
							</>
						))}
					</div>
				</>
			) : (
				<div>
					City Not Found. Please make sure that you entered the information
					correctly
				</div>
			)}
		</div>
	);
};
