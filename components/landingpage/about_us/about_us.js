function renderAboutUs(parentId) {
    const parent = document.getElementById(parentId);
    const aboutUsSection = document.createElement('div');
    aboutUsSection.id = 'au-section';

    aboutUsSection.innerHTML = `<div id='au-container'>
                                    <h1>OM OSS</h1>
                                    <div id='au-info'>
                                        <div id='au-left'>
                                            <p>Välkomna till NamNam – din digitala receptbok! Vi är ett härligt gäng bestående av fyra studenter från Malmö Universitet som sedan hösten 2023 studerar Medieteknik: Webbbaserad Design och Utveckling. Tillsammans har vi tagit på oss uppdraget att skapa en plattform där alla kan hitta inspiration och enkelhet i köket.</p>
                                            <p>Vi strävar efter att förena vår passion för teknik med vår kärlek till matlagning. Genom att kombinera våra kunskaper och erfarenheter hoppas vi kunna erbjuda en inspirerande och användarvänlig plattform där alla kan upptäcka recept som tilltalar deras smak och kunskapsnivå.</p>
                                            <p>Du som har ett konto hos NamNam har möjlighet att:</p>
                                            <ul>
                                                <li>Skapa din personliga inköpslista: Håll reda på vilka ingredienser du behöver för att tillaga dina favoritrecept.</li>
                                                <li>Spara dina favoritrecept: Samla dina mest älskade recept på en plats för enkel åtkomst när inspirationen slår till.</li>
                                            </ul>
                                            <p>Tack för att du besöker vår sida, vi hoppas att du hittar massor av smakrika upplevelser här!</p>
                                        </div>
                                        <div id='au-right'>
                                            
                                            <div id='au-img-container'>
                                                <div>
                                                    <div id='au-img-team'></div>
                                                    <div>
                                                <p>Möt vårt team:<br>Embla, Johan, Hilda och Olivia</p>
                                                
                                                </div>
                                                    <div id='au-img-icon'></div>
                                                    <div id='au-img-logo'></div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

    parent.append(aboutUsSection);
}