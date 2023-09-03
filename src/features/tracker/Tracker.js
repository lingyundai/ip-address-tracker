function Tracker ({ resultFields }) {
    return (
        <div class="flex text-center">
            <div class="w-full h-64 bg-cover lg:bg-desktop-header-image sm:bg-mobile-header-image">
                <header class="pt-8">
                    <h1 class="text-2xl font-rubik font-bold tracking-wide text-white">IP Address Tracker</h1>
                </header>
                <div class="w-full mt-8 inline-block relative pr-12">
                    <input
                        type="search" 
                        id="default-search"
                        class="sm:w-searchsmall lg:w-searchbig p-3.5 rounded-tl-lg rounded-bl-lg max-w-full"
                        placeholder="Search for any IP address or domain" 
                        required
                    >
                    </input>
                    <button type="submit" class=" bg-black rounded-tr-lg rounded-br-lg p-1.5 absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-3">
                            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
                        </svg>
                    </button>
                </div>
                <div class="container mt-7 inline-block relative rounded-lg bg-white shadow
                            sm:max-w-sm sm:w-[300px] sm:h-[270px]
                            lg:w-containerlg lg:h-40">
                    <div class="font-rubikMedium tracking-wider mt-6
                                lg:flex">
                        <div class="lg:basis-[25%]">
                            <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">IP ADDRESS</p>
                            {resultFields.ip && 
                                <div class="text-xl text-black sm:p-[3px] sm:mb-3 
                                            lg:text-start lg:ml-[2vw] lg:mt-2">{resultFields.ip}</div>
                            }
                        </div>
                        <div class="lg:border-r-zinc-400 lg:h-16 lg:mt-4 lg:border-[0.5px]"></div>
                        <div class="lg:basis-[25%]">
                            <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">LOCATION</p>
                            {resultFields.location && 
                                <div class="text-xl text-black sm:p-[3px] sm:mb-3 
                                            lg:text-start lg:ml-[2vw] lg:mt-2">{resultFields.location}</div>
                            }
                        </div>
                        <div class="lg:border-r-zinc-400 lg:h-16 lg:mt-4 lg:border-[0.5px]"></div>
                        <div class="lg:basis-[25%]">
                            <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">TIMEZONE</p>
                            {resultFields.timezone && 
                                <div class="text-xl text-black sm:p-[3px] sm:mb-3 
                                            lg:text-start lg:ml-[2vw] lg:mt-2">{resultFields.timezone}</div>
                            }
                        </div>
                        <div class="lg:border-r-zinc-400 lg:h-16 lg:mt-4 lg:border-[0.5px]"></div>
                        <div class="lg:basis-[25%]">
                            <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">ISP</p>
                            {resultFields.isp && 
                                <div class="text-xl text-black sm:p-[3px] sm:mb-3 
                                            lg:text-start lg:ml-[2vw] lg:mt-2">{resultFields.isp}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracker;