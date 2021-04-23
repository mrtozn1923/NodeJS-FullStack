class Profile{
    constructor(){
        this.clientId='',
        this.clientSecret=''
    }
    async getProfile(username){
        const profileResponse=await fetch(`https://jsonplaceholder.cypress.io/users?username=${username}`);
        const profile=await profileResponse.json();
        
        const todoResponse=await fetch(`https://jsonplaceholder.cypress.io/todos?userId=${profile[0].id}`);
        const todo=await todoResponse.json(); 
        
        return{
            profile,
            todo
        }
    }
}