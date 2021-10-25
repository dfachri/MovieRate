function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
console.log(getQueryVariable("category"));
var category = getQueryVariable("category");
if(!category){
    document.getElementById("li_main").classList.add("active");
} else {
    document.getElementById("li_"+category).classList.add("active");
}
const container = document.querySelector('.content')
const renderPosts = async () => {
    let uri = 'http://localhost:3000/film';
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    console.log(posts);
    var i = 1;
    posts.forEach(film =>{
        
        if (!category){
            template += `
            <a href="./movie.html?id=${film.id}"">
            <div class="container" id="film${i}"">
                <img src="./res/${film.img}.jpg" class="poster"/>
                <div class="overlay">
                    <h3>${film.title}</h3>
                    <img src="./res/Star-ON.png" class="star"/>
                    <p>(${film.star})</p class="star">
                    <p>${film.deskripsi}</p>
    
                </div>
            </div>
            </a>
            `
        } else if (category==film.type){
            template += `
        <a href="./movie.html?id=${film.id}"">
        <div class="container" id="film${i}"">
            <img src="./res/${film.img}.jpg" class="poster"/>
            <div class="overlay">
                <h3>${film.title}</h3>
                <img src="./res/Star-ON.png" class="star"/>
                <p>${film.star}</p class="star">
                <p>${film.deskripsi}</p>

            </div>
        </div>
        </a>
        `
        }
        
        
    })
    i += 1;
    container.innerHTML = template;
    if (template!=''){
        document.getElementById("peringatan").remove();
    }
}
window.addEventListener('DOMContentLoaded',()=>renderPosts());