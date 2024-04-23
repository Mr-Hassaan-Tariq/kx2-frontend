import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Sidebar/Sidebar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Components/Customer/Customer';
import Administration from './Components/Administration/Administration';
import Grocery from './Components/Grocery/Grocery';
import Product from './Components/Product/Product'
import Locations from './Components/Locations/Locations';
import Warehouses from './Components/Warehouses/Warehouses';
import Login from './Components/Login/Login';
import Ethnic from './Components/Ethnic/Ethnic';
import Support from './Components/Support/Support';

function App() {
  const [pageFullWidth,setPageFullWidth] = useState(false);
  return (

    <div >
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={[<Login /> ]} />
          <Route path="/" element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Dashboard pageFullWidth={pageFullWidth} /> ]} />
          <Route path='/customers' element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Customer  pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth}/>]} />
          <Route path="/ethnic" element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Ethnic pageFullWidth={pageFullWidth} /> ]} />
          <Route path='/locations' element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Locations  pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth}/>]} />
          <Route path='/administration' element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Administration  pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth}/>]} />
          <Route path='/grocery' element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Grocery  pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth}/>]} />
          <Route path='/warehouses' element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Warehouses  pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth}/>]} />
          <Route path='/grocery/:catId' element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Product  pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth}/>]} />
          <Route path="/support" element={[<SideBar pageFullWidth={pageFullWidth} setPageFullWidth= {setPageFullWidth} />,<Support pageFullWidth={pageFullWidth} /> ]} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
