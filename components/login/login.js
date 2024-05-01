function renderLoginContainer() {
    let loginWrapper = document.getElementById('wrapper');
    loginWrapper.innerHTML = `
            <div id='login-container'>
           <h1>LOGGA IN</h1>
           <input id='login-username' placeholder='Användarnamn' type='text'>
           <input id='login-password' placeholder='Lösenord' type='password'>
           <button id='login-button'>Logga in</button>
           <p id="success"></p>
           <p class='subtitle-login'>Har du inte ett konto?</p>
           <a href='./../register/register.html'>Skapa konto</a>
       </div>
       `;

    const username = document.getElementById("login-username");
    const password = document.getElementById("login-password");

    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', async () => {

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
            user: username.value
        }
        State.Post(user);

    })
}


renderLoginContainer();

function toLandingPage() {
    const success = document.createElement("p");
    success.textContent = "Du är nu inloggad";
    document.getElementById("success").append(success);



    setTimeout(() => {
        window.location = "./../../index.html";
    }, 2000);


}