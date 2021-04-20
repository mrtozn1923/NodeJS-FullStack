document.querySelector("#get-employee").addEventListener("click", loadEmployee);
document.querySelector("#get-employees").addEventListener("click", loadEmployees);

function loadEmployee() {

    var loadImage=document.querySelector('#loading');
    loadImage.style.display="block";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employee.json', true);

    xhr.onload = function() {
        loadImage.style.display="none";
        if (this.status === 200) {
            // console.log(this.responseText);
            // console.log(JSON.parse(this.responseText));
            
            let employees = JSON.parse(this.responseText);

            let html = `
                    <tr>
                        <td>${employees.firstName}</td>
                        <td>${employees.lastName}</td>
                        <td>${employees.age}</td>
                        <td>${employees.retired}</td>
                    </tr>
                `;
            document.querySelector("#employees").innerHTML = html;
        }
    }

    xhr.send();

}
function loadEmployees() {

    var loadImage=document.querySelector('#loading');
    loadImage.style.display="block";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);

    xhr.onload = function() {
        loadImage.style.display="none";
        if (this.status === 200) {
            // console.log(this.responseText);
            // console.log(JSON.parse(this.responseText));

            let employees = JSON.parse(this.responseText);

            let html = "";

            employees.forEach(employee => {
                html += `
                <tr>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>`;
            });

            document.querySelector("#employees").innerHTML = html;
        }
    }

    xhr.send();

}