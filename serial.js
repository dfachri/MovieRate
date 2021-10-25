const container = document.querySelector('.content')
const renderPosts = async () => {
    let uri = 'http://localhost:3000/film';
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    console.log(posts);
    var i = 1;
    posts.forEach(film =>{
        if(film.type=="serial"){
            var star1='Off';
            var star2='Off';
            var star3='Off';
            var star4='Off';
            var star5='Off';
            if (film.star>=1){
                star1="On"
            }
            if (film.star>=2){
                star2="On"
            }
            if (film.star>=3){
                star3="On"
            }
            if (film.star>=4){
                star4="On"
            }
            if (film.star>=5){
                star5="On"
            }
            template += `
            <div class="container" id="film${i}">
                <img src="./res/${film.img}.jpg" class="poster"/>
                <div class="overlay">
                    <h3>${film.title}</h3>
                    <img src="./res/Star-${star1}.png" class="star"/>
                    <img src="./res/Star-${star2}.png" class="star"/>
                    <img src="./res/Star-${star3}.png" class="star"/>
                    <img src="./res/Star-${star4}.png" class="star"/>
                    <img src="./res/Star-${star5}.png" class="star"/>
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