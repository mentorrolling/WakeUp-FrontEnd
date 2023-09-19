const JAVAlogin = () => {
    return (
        <div class="container-form sign-in">

            <div class="w-25 p-4 rounded bg-dark">
                <form id="formLogin">
                    <h2 class="text-light mb-3">Iniciar Sesion</h2>

                    <div class="row">
                        <div class="mb-3">
                            <label>Dirección de email</label>
                            <input type="email" class="form-control" aria-describedby="Email de usuario" placeholder="Email" value="" id="emailLogin" />
                            <p id="alertaEmailLogin"></p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="mb-3">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" aria-describedby="Password" placeholder="Contraseña" value="" id="passLogin" />
                            <p id="alertaPasswordLogin"></p>
                        </div>
                    </div>

                    <div class="row">
                        <div class=" mt-3 d-flex justify-content-center">
                            <button class="btn btn-outline-light" type="submit">Ingresar</button>
                        </div>
                    </div>

                </form>
            </div>

            <div class="welcome-back">
                <div class="message">
                    <h2>¡Bienvenido nuevamente!</h2>
                    <p>Si aún no tenés una cuenta, registrate acá</p>
                    <button class="sign-in-btn btn btn-outline-dark">Registrarse</button>
                </div>
            </div>
        </div>

    )
}

export default JAVAlogin