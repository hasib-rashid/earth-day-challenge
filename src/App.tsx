
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
				<div className='w-20'>
					<h1 className='text-3xl'>Hello World</h1>
				</div>
				<div className="flex justify-center items-center">
					{firedata ? <Earth fire={firedata} /> : <h1>Loading</h1>}
				</div>
			</div>
		</div>
	)
}

export default App
