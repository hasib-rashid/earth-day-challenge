
import { useEffect, useState } from 'react';
import axios from 'axios'
import Earth from './Earth';
import Header from './components/Header';

function App() {

	const [firedata, setFiredata] = useState<any>(null)

	useEffect(() => {
		axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events").then((res) => {
			setFiredata(res.data)
		})
	}, [])

	return (
		<div className='app'>
			<Header />
			<div>
				<div>
					<h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
						Save <span className='text-green-500'>Earth</span> <br />
						Save {' '}
						<span className="bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text">Humanity</span>
						.
					</h1>
				</div>
				<div className="flex justify-center items-center">
					{firedata ? <Earth fire={firedata} /> : <h1>Loading</h1>}
				</div>
			</div>
		</div>
	)
}

export default App
