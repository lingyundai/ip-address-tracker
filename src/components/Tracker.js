function Tracker () {
    // sm:right-8 lg:right-24
    return (
        <div class="flex">
            <div class="w-full h-64 bg-cover lg:bg-desktop-header-image sm:bg-mobile-header-image">
                <header class="pt-8 text-center">
                    <h1 class="text-2xl font-rubik font-bold tracking-wide text-white">IP Address Tracker</h1>
                </header>
                <div class="w-full mt-8 inline-block relative ml-[10.5vw]">
                    <input
                        type="search" 
                        id="default-search"
                        class="w-4/6 p-3.5 rounded-tl-lg rounded-bl-lg"
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
            </div>
        </div>
    )
}

export default Tracker;