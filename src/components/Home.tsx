import bgImg from '../assets/bg.jpeg'

export const Home = () => {
    return (
        <section className="h-[800px] bg-cover bg-center" style={{ backgroundImage: `url('${bgImg}')` }}>
            <div className="container mx-auto flex items-center justify-center h-full">
                <h2 className="text-4xl text-white">Welcome to Our Guest House</h2>
            </div>
        </section>
    )
}