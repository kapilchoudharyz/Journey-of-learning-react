import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pricing from "./Pages/Pricing.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Product from "./Pages/Product.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

function App() {

    return (<div>

            <BrowserRouter>
                <Routes>
                    <Route path={'pricing'} element={<Pricing/>}></Route>
                    <Route path={'product'} element={<Product/>}></Route>
                    <Route path={'/'} element={<Homepage/>}></Route>
                    <Route path={'*'} element={<PageNotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
