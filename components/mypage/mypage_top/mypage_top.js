function renderMyPageTop(parentId) {
    const parent = document.getElementById(parentId);
    const myPageTopContainer = document.createElement('div');
    let username = localStorage.getItem('login').toUpperCase();
    myPageTopContainer.id = 'mypage-top-container';
    myPageTopContainer.innerHTML = `
    <div id='shadow'></div>
        <div id='my-page-info'>
            <h1>MIN SIDA</h1>
            <p id="mypage-user">HEJ ${username}!</p>
            <p> Du som har ett konto hos NamNam har möjlighet att: <p>
            <ul>
                <li>Skapa personliga inköpslistor: Håll reda på vilka ingredienser du behöver för att tillaga dina favoritrecept.</li>
                <li>Spara dina favoritrecept: Samla dina mest älskade recept på en plats för enkel åtkomst när inspirationen slår till.</li>
            </ul>

        </div>
        <div id='shopping-list-container'>
            <div id='shopping-list'></div>
            <div id='textgubbe-klicka-har'><p>Klicka på listan! <i>⤴</i></p></div>
        </div>
    </div>
    `;

    parent.append(myPageTopContainer);

    myPageTopContainer.querySelector('#shopping-list').addEventListener('click', function () {
        renderShoppinglistPopup();
    });
}