
function saveRecipe(event) {
    console.log("hej");
    event.stopPropagation();
    
            const patchRecipe = {
                id: parseInt(event.currentTarget.id.split('-')[1]),
                user: window.localStorage.getItem('login')
            };
    
            const request = new Request('./../../api/users.php', {
                method: 'PATCH',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(patchRecipe)
            });
    
            const patchObject = {
                entity: 'user',
                request: request
            };

            State.Patch(patchObject);
}