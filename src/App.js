// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import SubNav from './components/SubNav';
// import Header from './components/Header';
// import Cart from './components/Cart';
// import EmptyCart from './components/EmptyCart';
// import AddressDetails from './components/AddressDetails';
// import PersonalDetails from './components/PersonalDetails';
// import Summary from './components/Summary';



// const App = () => {

 
//      return (
//        <div>
//         <Header/>
//         <SubNav/>
//         <Routes>
//           <Route path="/" element={<Cart/>} />
//           <Route path="/EmptyCart" element={<EmptyCart/>} />
//           <Route path="/PersonalDetails" element={<PersonalDetails/>} />
//           <Route path="/AddressDetails" element={<AddressDetails/>} />
//           <Route path="/Summary" element={<Summary/>} />

// </Routes>
//          </div>
//      )
// }

// export default App;









// Add a line UI

import React, { useState } from 'react';
import './App.css';
import Main from './components/UI/Main';


const App = () => {
  return (
    <div>
      <Main/>
    </div>
  )
}

export default App;
