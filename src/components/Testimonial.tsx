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
            <Center className="absolute z-10 w-full">
                <div className="flex justify-center items-center pt-24 flex-col">
                    <img src={quote} className="invert h-full" alt="quote" />
                    <p className="text-2xl font-sans font-bold lg:mt-4">The <span className="text-[#2BDD66] font-extrabold">Earth</span> does not belong to us:</p>
                    <p className="text-3xl font-sans font-bold"><span className="text-[#C91A25] font-extrabold">We</span> belong to the <span className="text-[#2BDD66] font-extrabold">Earth</span>."</p>
                    <p className="mt-3 text-white text-xl">- Marlee Matlin</p>
                    <p className="sm:mt-0 text-center lg:mt-12 w-[350px] md:w-full text-xl font-medium">This Earth Day, let's remember we are part of a larger ecosystem and our actions have a profound impact on our planet.</p>
                </div>
            </Center>
            <Center>
                <img className="relative z-0 w-screen h-screen brightness-50" src="https://www.shutterstock.com/image-illustration/planet-earth-realistic-geography-surface-600nw-2144341697.jpg" alt="Earth" />
            </Center>
        </main>
    )
}