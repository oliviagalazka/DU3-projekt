function renderLoginContainer() {
    let loginWrapper = document.getElementById('wrapper-login');
    loginWrapper.innerHTML = `
        <div id='login-container'>
            <h1>LOGGA IN</h1>
            <input id='login-username' placeholder='Användarnamn' type='text'>
            <input id='login-password' placeholder='Lösenord' type='password'>
            <button id='login-button'>Logga in</button>
            <p id="feedback"></p>
            <p>Har du inte ett konto?</p>
            <a href='./register.html'>Skapa konto</a>
        </div>
        `;

    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');

    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', async () => {

        if (username.value === '' || password.value === '') {
            document.getElementById('feedback').textContent = 'Vänligen fyll i alla fält!';
        } else {
            const postData = {
                username: username.value,
                password: password.value,
            }

            const request = new Request('./api/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });

            const user = {
                entity: 'login',
                request: request,
                user: username.value,
            }
            State.Post(user);
        }
    });
}

renderLoginContainer();

// Om inloggningen lyckades -> till landing page
function toLandingPage() {
    let inloggadReturn = document.getElementById('feedback');
    inloggadReturn.textContent = 'Du är nu inloggad, välkommen!';
    inloggadReturn.style.color = 'green';

    setTimeout(() => {
        window.location = './index.html';
    }, 2000);
}