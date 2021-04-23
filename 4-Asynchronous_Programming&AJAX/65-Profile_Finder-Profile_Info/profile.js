class Profile{
    constructor(){
        this.clientId='',
        this.clientSecret=''
    }
    async getProfile(username){
        const profileResponse=await fetch(`https://jsonplaceholder.cypress.io/users?username=${username}`);

        const profile=await profileResponse.json();
        return{
            profile
        }
    }
}