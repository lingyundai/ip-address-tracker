function Tracker ({ resultFields }) {
    return (
        <div>
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
                                sm:max-w-sm sm:w-[330px] sm:h-[300px]
                                lg:w-containerlg lg:h-40 z-10">
                        <div>
                        </div>
                        <div class="font-rubikMedium mt-6 first-letter flex sm:flex-col">
                            <div class="lg:basis-[25%]">
                                <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">IP ADDRESS</p>
                                {resultFields.ip && 
                                    <div class="text-xl text-black sm:mt-2 sm:mb-3 sm:text-[5vw]
                                                lg:text-start lg:ml-[2vw] lg:mt-2">{resultFields.ip}</div>
                                }
                            </div>
                            <div class="lg:basis-[25%]">
                                <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">LOCATION</p>
                                {resultFields.location && 
                                    <div class="text-xl text-black sm:mt-2 sm:mb-3 sm:text-[5vw]
                                                lg:text-start lg:ml-[2vw] lg:mt-2">{resultFields.location}</div>
                                }
                            </div>
                            <div class="lg:basis-[25%]">
                                <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">TIMEZONE</p>
                                {resultFields.timezone && 
                                    <div class="text-xl text-black sm:mt-2 sm:mb-3 sm:text-[5vw]
                                                lg:text-start lg:ml-[2vw] lg:mt-2">UTC {resultFields.timezone}</div>
                                }
                            </div>
                            <div class="lg:basis-[25%]">
                                <p class="lg:text-start lg:ml-[2vw] text-[9px] tracking-[0.15em] text-zinc-500 font-bold">ISP</p>
                                {resultFields.isp && 
                                    <div class="text-xl text-black sm:mt-2 sm:mb-3 sm:text-[5vw] text-
                                                lg:text-start lg:ml-[2vw] lg:mt-2 text-clip">{resultFields.isp}</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracker;