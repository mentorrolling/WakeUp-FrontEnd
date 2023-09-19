import { useState } from "react";

const JAVAregister = () => {
    const [infForm, setInfForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })

    // const [errorMessage, setErrorMessage] = useState()

    // if(infForm.nombre.length === 0){
    //     return setErrorMessage("Este campo es obligatorio")
    // }

    // console.log(errorMessage);

    return (
        <div className="container-form sign-up">
            <div className="welcome-back">
                <div className="message">
                    <h2>¡Bienvenido a HelloWord!</h2>
                    <p>Si ya tenés una cuenta, iniciá sesión acá</p>
                    <button className="sign-up-btn btn btn-outline-dark">Iniciar Sesion</button>
                </div>
            </div>

            <div className="w-25 p-4 rounded bg-dark">
                <form id="formRegistro">
                    <h2 className="text-light mb-3">Crear una cuenta</h2>

                    <div className="row">
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" aria-describedby="Nombre" placeholder="Nombre/s"  id="nombreUsuario" onChange={(e) =>  setInfForm({...infForm, nombre:e.target.value})}/>
                            <p id="alertaNombre"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Apellido</label>
                            <input type="text" className="form-control" aria-describedby="Apellido" placeholder="Apellido/s" id="apellidoUsuario" onChange={(e) =>  setInfForm({...infForm, apellido:e.target.value})}/>
                            <p id="alertaApellido"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Dirección de email</label>
                            <input type="email" className="form-control" aria-describedby="Email de usuario" placeholder="Email" id="emailUsuario" onChange={(e) =>  setInfForm({...infForm, email:e.target.value})}/>
                            <p id="alertaEmail"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" aria-describedby="Password" placeholder="Contraseña" id="passUsuario" onChange={(e) =>  setInfForm({...infForm, password:e.target.value})}/>
                            <p id="alertaPassword"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" mt-3 d-flex justify-content-center">
                            <button className="btn btn-outline-light" type="submit" onClick={(e) => {e.preventDefault(), console.log(errorMessage)}}>Registrarse</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default JAVAregister