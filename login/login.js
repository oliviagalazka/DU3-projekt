function renderRegisterContainer (parentid) {
    const loginWrapper = document.getElementById('wrapper-login');
    loginWrapper.innerHTML= `
        <div id='login-Container'>
            <h1>LOGGA IN</h1>
            <input id='login-username' placeholder='Användarnamn' type='text'>
            <input id='login-password' placeholder='Lösenord' type='password'>
            <button id='login-button'>Logga in</button>
            <p class='subtitle-login'>Har du inte ett konto?</p>
            <a href='./register.html'>Skapa konto</a>
        </div>
        `;
}

renderRegisterContainer();