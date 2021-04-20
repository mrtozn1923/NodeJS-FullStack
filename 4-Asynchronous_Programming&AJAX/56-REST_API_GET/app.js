document.querySelector("#get-one").addEventListener("click", getOne);
document.querySelector("#get-all").addEventListener("click", getAll);

function getOne() {
    var id = document.getElementById("post-id").value;
    if (id) {
        var url = "https://jsonplaceholder.typicode.com/posts/" + id;
        var xhr = new XMLHttpRequest();

        document.getElementById("loading").style.display = "block";

        xhr.open('GET', url, true);
        xhr.onload = function() {
            document.getElementById("loading").style.display = "none";
            if (this.status === 200) {
                var post = JSON.parse(this.responseText);
                var html = "";
                html += `
                        <div class="card mb-2">
                            <div class="card-header">
                                ${post.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="card-body">
                                    <p>${post.body}</p>
                                </blockquoute>
                            </div>
                        </div>
                    `;
                document.querySelector("#results").innerHTML = html;
            }
        }
        xhr.send();
    }else{
        alert("Lütfen post id bilgisini girin.");
    }
}

function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    document.getElementById("loading").style.display = "block";

    xhr.open('GET', url, true);
    xhr.onload = function() {
        document.getElementById("loading").style.display = "none";
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            var html = "";

            posts.forEach(post => {

                html += `
                    <div class="card mb-2">
                        <div class="card-header">
                            ${post.title}
                        </div>
                        <div class="card-body">
                            <blockquote class="card-body">
                                <p>${post.body}</p>
                            </blockquoute>
                        </div>
                    </div>
                `;
            });
            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();
}