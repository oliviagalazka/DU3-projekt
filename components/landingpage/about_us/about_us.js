function renderAboutUs(parentId) {
    const parent = document.getElementById(parentId);
    const AboutUsContainer = document.createElement('div');
    AboutUsContainer.id = 'AboutUsContainer'
    AboutUsContainer.innerHTML = `
        <h1>OM OSS</h1>
        <div>
            <p>Välkomna till NamNam – vår egen lilla kokbok online! Vi är ett härligt gäng bestående av fyra studenter från Malmö Universitet som sedan hösten 2023 studerar programmet Medieteknik: Webbbaserad Design och Utveckling. Tillsammans har vi tagit på oss uppdraget att skapa en plattform där alla kan hitta inspiration och enkelhet i köket då matlagning är en av våra gemensamma intressen.</p>
            <div>
                <p>Möt vårt team:</p>
                <p>Olivia: Bild. Favoritmaträtt: </p>
                <p>[Klasskamrat 1]: Bild. Favoritmaträtt: </p>
                <p>[Klasskamrat 2]: Bild. Favoritmaträtt: </p>
                <p>[Klasskamrat 3]: Bild. Favoritmaträtt: </p>
            </div>
            <p>Tillsammans strävar vi efter att förena vår passion för teknik med vår kärlek till matlagning. Genom att kombinera våra kunskaper och erfarenheter hoppas vi kunna erbjuda en inspirerande och användarvänlig plattform där alla kan hitta recept som passar deras smak och kunskapsnivå i köket. Tack för att du besöker vår sida, och vi hoppas att du hittar massor av smakrika upplevelser här!</p>
        </div>
    `;

    parent.append(AboutUsContainer);
}