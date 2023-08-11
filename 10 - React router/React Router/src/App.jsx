import Navbar from "./Components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./Pages/About.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Portfoliopage from "./Pages/Portfoliopage.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route index element={<Homepage/>}></Route>
                <Route path={'about'} element={<About/>}>
                    <Route index element={<p>This is index path</p>}></Route>
                    <Route path={'name'} element={<p>My name is kapil</p>}></Route>
                </Route>
                <Route path={'/portfolio'} element={<Portfolio/>}></Route>
                <Route path={'/portfolio/:id'} element={<Portfoliopage/>}></Route>
            </Routes>
        </>
    )
}

export default App
