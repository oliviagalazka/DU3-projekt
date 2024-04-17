function renderRegisterContainer (parentid) {
    const registerWrapper = document.getElementById('wrapper-register');
    registerWrapper.innerHTML= `
        <div id='register-Container'>
            <h1>SKAPA KONTO</h1>
            <input id='username' placeholder='Användarnamn' type='text'>
            <input id='password' placeholder='Lösenord' type='password'>
            <input id='password' placeholder='Bekräfta lösenord' type='password'>
            <button id='register-button'>Logga in</button>
            <p class='subtitle-register'>Har du redan ett konto?</p>
            <a href='./login.html'>Logga in</a>
        </div>
        `;
}

renderRegisterContainer();