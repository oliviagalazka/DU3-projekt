function renderRegisterContainer() {
    const registerWrapper = document.getElementById('wrapper');
    registerWrapper.innerHTML = `
        <div id='register-container'>
            <h1>SKAPA KONTO</h1>
            <input id='username' placeholder='Användarnamn' type='text'>
            <input id='password' placeholder='Lösenord' type='password'>
            <input id='password-confirm' placeholder='Bekräfta lösenord' type='password'>
            <button id='register-button'>Skapa konto</button>
            <p class='subtitle-register'>Har du redan ett konto?</p>
            <a href='./login.html'>Logga in</a>
        </div>
        `;

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");

    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', async () => {

        const postData = {
            username: username.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value
        }

        const request = new Request("./../api/register.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        const newUser = {
            entity: "users",
            request: request
        }
        State.Post(newUser);
    })
}

renderRegisterContainer();