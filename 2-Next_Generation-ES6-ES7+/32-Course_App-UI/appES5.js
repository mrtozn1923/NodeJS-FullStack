//Course Constructor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}
//UI Constructor
function UI() {

}
UI.prototype.addCourseToList = function(course) {
    const list = document.getElementById('course-list');
    var html = `
        <tr>
            <td><img src="img/${course.image}" class="w-100"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm">Delete</a></td>
        </tr>
    `;
    list.innerHTML += html;
}
UI.prototype.clearControls = function() {
    document.getElementById("title").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("image").value = "";
}

document.getElementById("new-course").addEventListener("submit", function(e) {
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;
 
        //Create Course Object
        const course = new Course(title, instructor, image);

        //create UI
        const ui = new UI();

        //add course to list
        ui.addCourseToList(course);

        //clear controls
        ui.clearControls();

    e.preventDefault();
});