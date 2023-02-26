let list = document.querySelector('ul');

addCourse = course => {
    let html = `
        <li class="list-group-item">
            <h3>${course.title}</h3>
            <small>${course.created_at.toDate()}</small>
        </li>
    `
    list.innerHTML += html; 
}
   


