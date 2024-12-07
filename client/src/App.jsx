
import React from 'react'
import Navbar from './components/sharedComponents/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/sharedComponents/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Footer from './components/sharedComponents/Footer'
import { ToastContainer } from 'react-toastify'
import AddProducts from './components/productComponents/AddProducts';
import Cart from './components/productComponents/Cart';
import AddAddress from './components/productComponents/AddAddress'
import SmartSecurity from './categories/SmartSecurity'
import SmartLighting from './categories/SmartLighting'
import SmartSpeakers from './categories/SmartSpeakers'
import SmartSwitches from './categories/SmartSwitches'
import SmartDisplays from './categories/SmartDisplays'
import AllCategories from './categories/AllCategories'
import ForgotPassword from './components/ForgotPassword'
import Checkout from './components/productComponents/Checkout'
import ResetPassword from './components/ResetPass'
import UserDashboard from './dashboard/UserDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/productComponents/Search'
import About from './components/sharedComponents/About'
import Contact from './components/sharedComponents/Contact'
import Policy from './components/sharedComponents/Policy'



function App() {
  return (
    <div>
     
       


<BrowserRouter>
<ToastContainer/>
<Navbar/>

<Routes>
<Route path="/" element= {<Home/>} />
<Route path="/signup" element= {<SignUp/>} />
<Route path="/login" element= {<Login/>} />
<Route path="/forgotpassword" element= {<ForgotPassword/>} />
<Route path="/resetpassword" element= {<ResetPassword/>} />
<Route path="/about" element= {<About/>} />
<Route path="/contact" element= {<Contact/>} />
<Route path="/policy" element= {<Policy/>} />


<Route path="/addproducts" element={<AddProducts/>}/>
<Route path="/usercart" element={<Cart/>}/>
<Route path="/addaddress" element={<AddAddress/>}/>
<Route path="/allcategories" element={<AllCategories/>}/>
<Route path="/smartsecurity" element={<SmartSecurity/>}/>
<Route path="/smartlighting" element={<SmartLighting/>}/>
<Route path="/smartspeakers" element={<SmartSpeakers/>}/>
<Route path="/smartswitches" element={<SmartSwitches/>}/>
<Route path="/smartdisplays" element={<SmartDisplays/>}/>
<Route path="/search" element={<SearchResults/>}/>


<Route path="/userdashboard" element= {<UserDashboard/>} />
<Route path="/user/checkout" element={<Checkout />} />
</Routes>


<Footer/>

</BrowserRouter>


        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />


          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/usercart" element={<Cart />} />
          <Route path="/addaddress" element={<AddAddress />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />

          <Route path="/allcategories" element={<AllCategories />} />
          <Route path="/smartsecurity" element={<SmartSecurity />} />
          <Route path="/smartlighting" element={<SmartLighting />} />
          <Route path="/smartspeakers" element={<SmartSpeakers />} />
          <Route path="/smartswitches" element={<SmartSwitches />} />
          <Route path="/smartdisplays" element={<SmartDisplays />} />

       
          <Route path="/user/checkout" element={<Checkout />} />
        </Routes>

        <Footer /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
