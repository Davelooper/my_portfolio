import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Realizations from "./Components/Realizations";
import './Styles/main.sass';
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="banner">
                <Banner />
            </section>
            <section id="about" className="container">
                <About />
            </section>
            <section id="realizations" className="container">
                <Realizations />
            </section>
            <section id="contact" className="container">
                <Contact />
            </section>
        </div>
    )
}

export default App;
