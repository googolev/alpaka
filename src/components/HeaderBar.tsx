export const HeaderBar = () => {
    return (
        <header className="bg-[#52503b] text-white h-20 flex items-center">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">ALPAKA</h1>
                <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}