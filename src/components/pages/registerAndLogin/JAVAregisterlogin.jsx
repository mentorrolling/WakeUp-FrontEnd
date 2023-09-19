import { useState } from "react"
import Register from "./JAVAregister.jsx"
import Login from "./JAVAlogin.jsx"
import "./CSSregLogin.css" 

const JAVAregisterlogin =({changeRegOrLog}) => {
    return(
        <div className="body-registerlogin"><Register/></div>
    )
}

export default JAVAregisterlogin