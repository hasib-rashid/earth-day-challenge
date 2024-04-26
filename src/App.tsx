import Globe from 'react-globe.gl'
import './App.css'
import globeImage from "../public/earth-dark.jpg"
function App() {
	const myData = [
		{
			city: 'New Orleans',
			lat: 29.953204744601763,
			lng: -90.08925929478903,
			altitude: 0.1,
			color: '#00ff33',
		},
		{
			city: 'New Delhi',
			lat: 28.621322361013092,
			lng: 77.20347613099612,
			altitude: 0.1,
			color: '#ff0000',
		},
		{
			city: 'New Zealand',
			lat: -43.1571459086602,
			lng: 172.72338919659848,
			altitude: 0.1,
			color: '#ffff00',
		},
	];

	return (
		<div className='cursor-move'>
			<Globe
				globeImageUrl={globeImage}
				htmlElementsData={myData}
				htmlAltitude='altitude'
				htmlElement={(data) => {
					const { city, color }: any = data;
					const element = document.createElement('div');
					element.style.color = color;
					element.innerHTML = `
						<div>
						<?xml version="1.0" encoding="utf-8"?><svg style="width: 25px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92.27 122.88" style="enable-background:new 0 0 92.27 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#EC6F59;} .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FAD15C;}</style><g><path class="st0" d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/><path class="st1" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/></g></svg>
							<strong style="font-size:10px;text-align:center">${city}</strong>
						</div>`;
					return element;
				}}
			/>
		</div>
	)
}

export default App
