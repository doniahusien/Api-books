let btn = document.getElementById("btn");

let get= ()=>{
let request = new XMLHttpRequest();
request.addEventListener("readystatechange",function(){
    if(this.readyState==4&&this.status==200){
        let dat = JSON.parse(this.responseText);
        let row = document.querySelector(" #mo");
        const books = dat.items;
        let columns= "";
        books.forEach(book=>{
            let title = book.volumeInfo.title.substr(0,20);
            let author= book.volumeInfo.authors||"";
            let img = book.volumeInfo.imageLinks.thumbnail;
            let desc = book.volumeInfo.description||"no description";
            desc= desc.substr(0,85)
            let infoLink = book.volumeInfo.infoLink;
            columns+=`
            <div class="rows">
            <img src="${img}">
            <h4>${title}</h4>
            <h3>${author}</h3>
            <p>${desc}</p>
            <a href="${infoLink}">Read More</a>
        </div>`;
        row.style.display="grid"

        })
        row.innerHTML= columns;    
    }

})
request.open("GET" , "https://www.googleapis.com/books/v1/volumes?q=2" , true);
request.send();
}
