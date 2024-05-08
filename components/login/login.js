function renderLoginContainer() {
    let loginWrapper = document.getElementById('wrapper-login');
    loginWrapper.innerHTML = `
                            <div id='login-container'>
                                <h1>LOGGA IN</h1>
                                <input id='login-username' placeholder='Användarnamn' type='text'>
                                <input id='login-password' placeholder='Lösenord' type='password'>
                                <button id='login-button'>Logga in</button>
                                <p id="success"></p>
                                <p class='subtitle-login'>Har du inte ett konto?</p>
                                <a href='./register.html'>Skapa konto</a>
                            </div>
                            `;

    const username = document.getElementById("login-username");
    const password = document.getElementById("login-password");

    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', async () => {
        document.getElementById('success').textContent = "";

        if (username.value === "" || password.value === "") {
            setTimeout(() => {
                document.getElementById('success').textContent = "Vänligen fyll i både användarnamn och lösenord.";
            }, 100);
        } else {
            const postData = {
                username: username.value,
                password: password.value,
            }

            const request = new Request("./../../api/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData),
            });

            const user = {
                entity: "login",
                request: request,
                user: username.value,
            }
            State.Post(user);
        }
    });
}

renderLoginContainer();

function toLandingPage() {
    document.getElementById("success").textContent = "Du är nu inloggad";

    setTimeout(() => {
        window.location = "./index.html";
    }, 2000);

}