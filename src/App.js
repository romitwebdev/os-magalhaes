import "./App.css";
import Header from "./Header";
import Links from "./Links";
import NavBar from "./NavBar.js";
import Menus from "./Menus";
import FooterComp from "./FooterComp";
import Map from "./Map";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <Links />
            <Menus />
            <Map />
            <FooterComp />
        </div>
    );
}

export default App;
