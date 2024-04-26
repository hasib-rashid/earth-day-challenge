
import { useEffect, useState } from 'react';
import axios from 'axios'
import Earth from './Earth';

function App() {

	const [firedata, setFiredata] = useState<any>(null)

	useEffect(() => {
		axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events").then((res) => {
			setFiredata(res.data)
		})
	}, [])

	return (
		<div className='app'>
			<h1 className='text-3xl bg-red-500'>Hello World</h1>
			{firedata ? <Earth fire={firedata} /> : <h1>Loading</h1>}
		</div>
	)
}

export default App
