function renderShoppinglistSection(parentId) {
    const parent = document.getElementById(parentId);
    const shoppinglistSection = document.createElement('div');
    shoppinglistSection.id = 'shoppinglistSection';
    shoppinglistSection.innerHTML = `
        <h1>Inköpslista</h1>
        <table>
            <tr>
                <td>
                    <div id='checkbox-shoppinglist'></div>
                </td>
                <td>
                    <p>ingrediens</p>
                </td>
                <td>
                    <div id='delete-row'>
                        <p>྾</p>
                    </div>
                </td>
            </tr>
        </table>
    `;

    parent.append(shoppinglistSection);
}