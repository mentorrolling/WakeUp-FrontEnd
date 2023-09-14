import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Orders from "./components/pages/Orders/Orders"
import Error404 from "./components/pages/Error404/Error404";
import Menu from "./components/pages/Menu/Menu";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/product/orders" element={<Orders />} />
          <Route exact path="/*" element={<Error404 />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
