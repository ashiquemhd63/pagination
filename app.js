var response = null;
var tbody = document.getElementById('table-data');
var selectedPage = 1;
var hasLoadedPagination = false;
var t_pages;

getData();

function getData(){
    fetch('https://reqres.in/api/users?page='+selectedPage)
    .then(res=>res.json())
    .then(data => {
        showData(data);
        if(!hasLoadedPagination){
            showPagination();
            hasLoadedPagination = true;
        }
        //  t_pages=data.total_pages;
    })
}
//      console.log(t_pages)

function showData(json){
    console.log(json);
    response = json;
    t_pages= response.total_pages
   

    // for (let i = 0; i < json.data.length; i++) {
    //     const user = json.data[i];
    //     console.log(user.email);
    // }
     tbody.innerHTML = "";
    json.data.forEach(user =>{
        // console.log(user.email);
        var row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showPagination() {
    var pages = document.getElementById('pages');
    pages.innerHTML += `
        <li class="page-item">
            <a class="page-link" href="#" onclick="return navPrevNext('p')">Previous</a>
        </li>
        `;

    for (let i = 1; i <= response.total_pages; i++) {
        pages.innerHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="return navPrevNext(${i})">${i}</a>
            </li>
        `;
    }

    pages.innerHTML += `
        <li class="page-item">
            <a class="page-link" href="#" onclick="return navPrevNext('n')">Next</a>
        </li>
        `;

}
function navPrevNext(option){
    if(option == 'p'){
        selectedPage--;
    }
    else if(option == 'n'){
        selectedPage++;
    }
    else if(option == 1){
        selectedPage=1;
        console.log('hello')
    }
    else if(option == 2){
        selectedPage=2;
    }
    // if()

    getData();
}
