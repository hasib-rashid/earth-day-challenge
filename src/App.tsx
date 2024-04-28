import { useEffect, useState } from 'react';
import axios from 'axios'
import Earth from './Earth';
import Header from './components/Header';
import Loading from './components/Loading';
import { FAQ } from './components/FAQ';
import { HeroText } from './components/Hero/HeroText';
import Testimonial from './components/Testimonial';
import Event from './components/Event';
import { Footer } from './components/Footer';

function App() {
	const [firedata, setFiredata] = useState<any>(null)

	useEffect(() => {
		axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events").then((res: any) => {
			setFiredata(res.data)
		})
	}, [])

	return (
		<div className='app'>
			{firedata ?
				<div>
					<Header />
					<div>
						<div className="absolute h-96 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-full flex justify-center items-center flex-col z-10">
							<h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
								Save <span className='text-green-500'>Earth</span> <br />
							</h1>
							<h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
								Save {' '}
								<span className="bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text">Humanity</span>
							</h1>
						</div>
						<div className="flex justify-center items-center relative brightness-60 z-0">
							<Earth fire={firedata} />
						</div>
					</div>
					<FAQ />
					<HeroText />
					<br />
					<br />
					<br />
					<Testimonial />
					<br />
					<Event />
					<Footer />
				</div>
				: <Loading />}
		</div>
	)
}

export default App
