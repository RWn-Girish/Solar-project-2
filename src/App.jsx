import { Route, Routes } from 'react-router';
import './App.css'
import About from './Components/About_Page/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/HeaderComp/Header';
import ServiceComp from './Components/Service_Page/ServiceComp';

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<ServiceComp />} />
            </Routes>
        </>
    )
}

export default App
