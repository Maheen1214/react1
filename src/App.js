import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
// import A from './components/A'
import Page from './components/Page';
import Contact from './components/Contact';
import Navbars from './components/Navbars';
import Formsignup from './auth/Formsignup';
import Login from './auth/Login';
import Product from './pages/Product';
const App = () => {
  return (
    <div>
    {/* <A/> */}
     <Navbars/>
   <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/page' element={<Page/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/formsignup' element={<Formsignup/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/product' element={<Product/>}></Route>
   </Routes>
    </div>
  )
}

export default App;
