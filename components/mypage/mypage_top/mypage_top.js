function renderMyPageTop(parentId) {
    const parent = document.getElementById(parentId);
    const myPageTopContainer = document.createElement('div');
    myPageTopContainer.id = 'mypage-top-container';
    myPageTopContainer.innerHTML = `
    <div id='shadow'></div>
        <div id='my-page-info'>
            <h1>MIN SIDA</h1>
            <p>Kära medlem!</p>
            <p>Du som har ett konto hos NamNam har möjlighet att:</p>
            <ul>
                <li>Skapa din helt egna inköpslista<br>Håll koll på vilka ingredienser du behöver handla hem för att kunna laga de recept du längtat efter att testa.</li>
                <li>Spara dina favoritrecept<br>Samla alla dina favoritrecept på en plats, så att det är enkelt att hitta tillbaka till dem igen.</li>
            </ul>
        </div>
        <div id='shopping-list-container'>
            <div id='shopping-list'></div>
            <div id='textgubbe-klicka-här'>textgubbe</div>
        </div>
    </div>
    `;

    parent.append(myPageTopContainer);

    myPageTopContainer.querySelector('#shopping-list').addEventListener('click', function () {
        renderShoppinglistPopup();
    });
}