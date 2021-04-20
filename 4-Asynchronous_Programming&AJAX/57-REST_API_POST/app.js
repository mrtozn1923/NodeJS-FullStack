document.querySelector("#get-one").addEventListener("click", getOne);
document.querySelector("#get-all").addEventListener("click", getAll);

document.querySelector("#post-data").addEventListener('click',postData);

function postData(){
    const data={
        userId:1,
        title:"new title",
        body:"new body"
    }
    var json=JSON.stringify(data);
    var url="https://jsonplaceholder.typicode.com/posts/";
    var xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.onload=function(){
        // console.log(xhr.status);
        // console.log(xhr.readyState);

        if(xhr.status===201 && xhr.readyState===4){
            var post=xhr.responseText;
            console.log(post);
        }
    }
    xhr.send(json);
}

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

