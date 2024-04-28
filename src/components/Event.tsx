export default function Event() {
    return (
        <main className="flex flex-col lg:flex-row justify-around items-center lg:h-screen">
            <img className="w-[350px] rounded-xl" src="https://i.insider.com/6390e53bad2cb500189ef961?width=700" alt="Join Event" />
            <div className="events">
                <h2 className="text-5xl my-7 font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                    Join an <span className="bg-gradient-to-br from-red-700 via-orange-500 to-green-500 text-transparent bg-clip-text">Event</span>
                </h2>
                <p className="w-[350px] text-xl">Participate in local and global Earth Day events to take action towards a sustainable future. Check out <a className="font-extrabold" href="#">events near you</a>.</p>
            </div>

        </main>
    )
}