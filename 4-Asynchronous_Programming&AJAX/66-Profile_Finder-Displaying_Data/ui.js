class UI {
    constructor() {
        this.profileContainer = document.querySelector("#profile-container");
        this.alert = document.querySelector("#alert");
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `

            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3>
                        <a href="https://www.placeholder.com">
                            <img src="https://via.placeholder.com/350x150" class="img-thumbnail">
                        </a>
                    </div>
                   
                    <div class="col-md-8">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                email: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                address: ${profile.address.street} ${profile.address.city} ${profile.address.zipcode} ${profile.address.suite}
                            </li>
                            <li class="list-group-item">
                                phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                website: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                name: ${profile.company.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        `;
    }

    showAlert(text){
        this.alert.classList.remove("d-none");
        this.alert.innerHTML=` ${text} bulunamadı.`;    
    }
    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
        this.alert.classList.add("d-none");
    }
}