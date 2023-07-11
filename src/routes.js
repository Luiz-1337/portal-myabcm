import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import HomePage from "./pages/Home/Home.jsx";
import Cases from "./pages/Cases/Cases.jsx";
import Documentations from "./pages/Documentations/Documentations.jsx";
import Activation from "./pages/Activation Code/Activation.jsx";
import Packages from "./pages/Packages/Packages.jsx";


export const MappedRoutes = () => {
return (
    <BrowserRouter>
        <Routes >
            <Route path='/'>
            <Route index element={<Login/>}/>
            <Route path="/Home" element={<HomePage/>}/>
        </Route>
        <Route path="/Cases">
              <Route index element={<Cases/>} />
        </Route>
        <Route path="/Documentations">
              <Route index element={<Documentations/>} />
        </Route>
        <Route path="/Activation">
              <Route index element={<Activation/>} />
        </Route>   
        <Route path="/Packages">
              <Route index element={<Packages/>} />
        </Route>           
        </Routes>
    </BrowserRouter>

)
}