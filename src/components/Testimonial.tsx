import { Center } from "@mantine/core";
import quote from '../assets/quote.svg'

export default function Testimonial() {
    return (
        <main>
            <Center className="m-12">
                <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                    Inspiration Corner
                </h1>
            </Center>
            <Center className="absolute z-10 invert">
                <img src={quote} alt="quote" />

            </Center>
            <img className="relative z-0 w-screen brightness-75" src="https://www.shutterstock.com/image-illustration/planet-earth-realistic-geography-surface-600nw-2144341697.jpg" alt="Earth" />
        </main>
    )
}