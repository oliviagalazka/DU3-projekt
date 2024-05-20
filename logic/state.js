const _state = {
    user: {},
    login: [],
    recipes: [],
    reviews: [],
    shoppinglist: []
}

const State = {
    GetEntity,
    Get,
    Post,
    Patch,
    Delete,
}

// SKA VI HA DETTA?
// if (window.localStorage.getItem('userdata')) {
//     _state['user'] = JSON.parse(window.localStorage.getItem('userdata'));
// }

// GET ENTITY funktion
function GetEntity(entity) {
    const copy = JSON.parse(JSON.stringify(_state[entity]));
    return copy;
}

// GET funktion
async function Get(data) {
    const entity = data.entity;
    const request = data.request;

    const response = await fetcher(request);
    if (!response.ok) {
        alert('Something whent wrong, Status ' + response.statusText);
        return;
    }

    const resource = await response.json();
    _state[entity] = resource;
}

// POST funktion
async function Post(data) {
    const entity = data.entity;
    const request = data.request;
    const user = data.user;

    const response = await fetcher(request);
    if (!response.ok) {
        const resource = await response.json()
        document.getElementById('feedback').textContent = resource.error;
        return;
    }

    const resource = await response.json();
    _state[entity] = resource;

    switch (entity) {
        case "user":
            toLogin();
            break;
        case "login":
            window.localStorage.setItem('login', user);
            // Behöver vi ha denna? Vad gör vi med userdata?
            window.localStorage.setItem('userdata', JSON.stringify(resource));
            toLandingPage();
            break;
        case "reviews":
            postReviewInstance(resource);
            break;
        case "shoppinglist":
            _state['user'].shoppingList.push(resource);
            postItem(resource);
            break;
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

    switch (entity) {
        case 'user':
            _state[entity].savedRecipes = resource.savedRecipes;
            patchRecipe(resource);
            break;
        case 'shoppinglist':
            const foundItem = _state['user'].shoppingList.find(item => item.item === resource.item);
            if (foundItem) {
                foundItem.checked = resource.checked;
            }
            patchItemCheckbox(resource);
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

    switch (entity) {
        case 'shoppinglist':
            const shoppingList = _state['user'].shoppingList;
            const deleteAt = shoppingList.findIndex(item => item.item === resource);
            const deleteInstance = shoppingList.splice(deleteAt, 1);
            deleteItem(deleteInstance[0]);
            break;
    }
}

// FETCHER funktion
async function fetcher(request) {
    try {
        const response = await fetch(request);
        return response;
    } catch (error) {
        console.log(error);
    }
}