const _state = {
    user: [],
    login: [],
    reviews: [],
    recipes: [],
    categories: [],
    shoppingList: []
}

const State = {
    Get,
    GetEntity,
    Post,
    Patch,
    Delete,
}

// GET funktion
function GetEntity(entity) {
    const copy = JSON.parse(JSON.stringify(_state[entity]));
    return copy;
}

async function Get(data) {

    const entity = data.entity;
    const request = data.request;

    const response = await fetcher(request);
    if (!response.ok) {
        alert('Something whent wrong, Status ' + response.statusText);
        return;
    } else {
        console.log('Welcome!') //fixa så det står på sidan
    }

    const resource = await response.json();
    // FIXME: vi stoppar in array i array, därför blir de dubbelt med push, _state[entity]=resource
    _state[entity].push(resource); //Skriva = istället så 
   

}

// POST funktion (register a new user)
async function Post(data) {
    const entity = data.entity;
    const request = data.request;

    const response = await fetcher(request);
    if (!response.ok) {
        alert('Something whent wrong, Status ' + response.statusText);
        return;
    } else {
        console.log('Welcome!') //fixa så det står på sidan
    }
    console.log(entity)
    const resource = await response.json();
    _state[entity].push(resource); //Skriva = istället så 

    switch (entity) {
        case "user":
            toLogin();
        case "login":
            toLandingPage();
    }

}

// PATCH funktion
async function Patch(data) {
    const entity = data.entity;
    const request = data.request;

    const response = await fetcher(request);
    if (!response.ok) {
        alert('Something whent wrong, Status ' + response.statusText);
        return;
    }

    const resource = await response.json();

    for (let element of _state[entity]) {
        if (element.id === resource.id) {
            element.favorite = resource.favorite;
        }
    }

    const instanceData = JSON.parse(JSON.stringify(_state[entity].find(element => element.id === resource.id)));

    switch (entity) {
        case 'games':
            patch_games(instanceData);
            update_counter();
            break;

        case 'characters':

            patch_characters(instanceData);
            update_counter();
            break;

        default:
            break;
    }
}

// DELETE funktion
async function Delete(data) {
    const entity = data.entity;
    const request = data.request;

    const response = await fetcher(request);
    if (!response.ok) {
        alert('Something whent wrong, Status ' + response.statusText);
        return;
    }

    const resource = await response.json();

    const arrayEntity = _state[entity];

    const deleteAt = arrayEntity.findIndex(element => element.id === resource.id);
    const deleteInstance = arrayEntity.splice(deleteAt, 1);

    switch (entity) {
        case 'games':
            delete_instance_gameslist(deleteInstance[0].id);
            update_counter();
            break;

        case 'characters':
            delete_instance_characters(deleteInstance[0].id);
            update_counter();
            break;

        default:
            break;
    }
}

/*
// renderApp funktion
async function renderApp() {
    const gameResponse = await fetcher('./api/games.php?token=6671cb1c4aeeb7b2bf6d7474b28296b199bdd568');
    console.log(gameResponse)

    if (gameResponse.ok) {
        const gameResource = await gameResponse.json();
        _state.games = gameResource;
    } else {
        alert('something whent wrong ' + gameResponse.statusText);
    }

    const characterResponse = await fetcher('./api/characters.php?token=6671cb1c4aeeb7b2bf6d7474b28296b199bdd568')
    console.log(characterResponse);

    if (characterResponse.ok) {
        const characterResource = await characterResponse.json();
        _state.characters = characterResource;
    } else {
        alert('something whent wrong ' + characterResponse.statusText);
    }

    document.getElementById('wrapper').innerHTML = '';
    renderContainerLeft('wrapper');
    renderContainerRight('wrapper');
}

renderApp();
*/

// fetch funktion
async function fetcher(request) {
    try {
        const response = await fetch(request);

        return response;

    } catch (error) {
        console.log(error);
    }
}