function renderRegisterContainer() {
    const registerWrapper = document.getElementById('wrapper-register');
    registerWrapper.innerHTML = `
        <div id='register-container'>
            <h1>SKAPA KONTO</h1>
            <input id='register-username' placeholder='Användarnamn' type='text'>
            <input id='register-password' placeholder='Lösenord' type='password'>
            <input id='register-password-confirm' placeholder='Bekräfta lösenord' type='password'>
            <button id='register-button'>Skapa konto</button>
            <p id='feedback'></p>
            <p>Har du redan ett konto?</p>
            <a href='./login.html'>Logga in</a>
        </div>
        `;

    const username = document.getElementById('register-username');
    const password = document.getElementById('register-password');
    const passwordConfirm = document.getElementById('register-password-confirm');

    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', async () => {
        document.getElementById('feedback').textContent = '';

        if (username.value === '' || password.value === '' || passwordConfirm.value === '') {
            document.getElementById('feedback').textContent = 'Vänligen fyll i alla fält!';
        } else if (password.value != passwordConfirm.value) {
            document.getElementById('feedback').textContent = 'Lösenorden matchar inte!';
        } else {
            const postData = {
                username: username.value,
                password: password.value,
                passwordConfirm: passwordConfirm.value
            }

            const request = new Request('./../../api/register.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });

            const newUser = {
                entity: 'user',
                request: request
            }
            State.Post(newUser);
        }
    });
}

renderRegisterContainer();

// Om registreringen blir lyckad -> till login page
function toLogin() {
    document.getElementById('feedback').textContent = 'Ditt konto har nu skapats!';

    setTimeout(() => {
        window.location = './login.html';
    }, 2000);
}