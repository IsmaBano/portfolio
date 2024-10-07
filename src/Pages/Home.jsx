import Hero from '../components/Hero'
import Counter from '../components/Counter'
import Skills from '../components/Skills'
import ProjectComponent from '../components/ProjectComponent'
import AboutComponents from '../components/AboutComponents'

const Home = () => {
    return (
        <div>
            <Hero />
            <Counter />
            <AboutComponents />
            <Skills />
            <ProjectComponent />
        </div>
    )
}

export default Home