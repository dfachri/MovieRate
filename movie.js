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

const container = document.querySelector('.content')
const renderPosts = async () => {
    let uri = 'http://localhost:3000/film/'+getQueryVariable("id");
    const res = await fetch(uri);
    const film = await res.json();
    let template = '';
    console.log(film);
    var i = 1;

        console.log(film.title);
    
        template += `
        <div class="box">
        <img src="res/${film.img}.jpg" class="latar">
        <div class="box2">
            <h1>${film.title}</h1>
            <p>&nbsp;</p>
            <img src="./res/Star-ON.png" class="star"/>
            <p>(${film.star})</p class="star">
            <p>&nbsp;</p>
            <p>Sinopsis : </p>
            <p>${film.deskripsi}</p>
            <p>&nbsp;</p>
            <a class="imdbButton" href="${film.link}" target="_blank"><span>IMDB</span></a>
        </div>
        
    </div>
        `
    i += 1;
    container.innerHTML = template;
    if (template!=''){
        document.getElementById("peringatan").remove();
    }
}
window.addEventListener('DOMContentLoaded',()=>renderPosts());