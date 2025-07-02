import { Route, Routes } from 'react-router';
import './App.css'
import About from './Components/About_Page/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/HeaderComp/Header';
import ServiceComp from './Components/Service_Page/ServiceComp';
import FooterComp from './Components/FooterComp/FooterComp';
import Blog_Page from './Components/Blog_Page/Blog_Page';
import Not_found from './Components/Notfound_page/Notfound_page';
import Contact_page from './Components/Contact_page/Contact_page';
import Blog_detail from './Components/Blog_Page/Blog_detail/Blog_detail';

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/service' element={<ServiceComp />} />
                <Route path='/blog' element={<Blog_Page />} />
                <Route path="/blogs/:id" element={<Blog_detail />} />
                <Route path='/contact' element={<Contact_page />} />
                <Route path='/*' element={<Not_found />} />
            </Routes>
            <FooterComp />
        </>
    )
}

export default App;