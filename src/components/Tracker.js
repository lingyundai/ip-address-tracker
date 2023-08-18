function Tracker () {
    return (
        <div class="flex text-center">
            <div class="w-full h-64 bg-cover lg:bg-desktop-header-image sm:bg-mobile-header-image">
                <header class="pt-8">
                    <h1 class="text-2xl font-rubik font-bold tracking-wide text-white">IP Address Tracker</h1>
                </header>
                <form class="relative">
                    <input
                        type="search" 
                        id="default-search"
                        class="w-3/4 p-3 mt-6 rounded-lg" 
                        placeholder="Search for any IP address or domain" 
                        required
                    >
                    </input>
                    <button class="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" class="">
                            <path fill="#000000" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Tracker;