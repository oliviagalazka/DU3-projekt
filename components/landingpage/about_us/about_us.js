function renderAboutUs(parentId) {
    const parent = document.getElementById(parentId);
    const aboutUsSection = document.createElement('div');
    aboutUsSection.id = 'about-us-section';

    aboutUsSection.innerHTML = `<div id='about-us-container'>
                                    <h1>OM OSS</h1>
                                    <div id='about-us-info'>
                                        <p>Välkomna till NamNam – vår egen lilla kokbok online! Vi är ett härligt gäng bestående av fyra studenter från Malmö Universitet som sedan hösten 2023 studerar programmet Medieteknik: Webbbaserad Design och Utveckling. Tillsammans har vi tagit på oss uppdraget att skapa en plattform där alla kan hitta inspiration och enkelhet i köket då matlagning är en av våra gemensamma intressen.</p>
                                        <p>Tillsammans strävar vi efter att förena vår passion för teknik med vår kärlek till matlagning. Genom att kombinera våra kunskaper och erfarenheter hoppas vi kunna erbjuda en inspirerande och användarvänlig plattform där alla kan hitta recept som passar deras smak och kunskapsnivå i köket. Tack för att du besöker vår sida, och vi hoppas att du hittar massor av smakrika upplevelser här!</p>
                                        <div>
                                            <p>Möt vårt team:</p>
                                            <div>Bild</div>
                                            <div>Bild</div>
                                            <div>Bild</div>
                                            <p>Våra namn</p>
                                        </div>
                                    </div>
                                </div>`;

    parent.append(aboutUsSection);
}