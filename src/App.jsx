import "bootstrap/dist/css/bootstrap.min.css";
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/Home/Home";
import Orders from "./componentes/pages/Orders/Orders"
import Error404 from "./componentes/pages/Error404/Error404";


function App () {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/product/orders" element={<Orders/>}/>
          <Route exact path="/*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
