const container = document.querySelector('.content')
const renderPosts = async () => {
    let uri = 'http://localhost:3000/film';
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    console.log(posts);
    var i = 1;
    posts.forEach(film =>{
        if(film.type=="movie"){
            template += `
            <div class="container" id="film${i}">
                <img src="./res/${film.img}.jpg" class="poster"/>
                <div class="overlay">
                    <h3>${film.title}</h3>
                    <img src="./res/Star-ON.png" class="star"/>
                    <p>(${film.star})</p class="star">
                    <p>${film.deskripsi}</p>

                </div>
            </div>
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