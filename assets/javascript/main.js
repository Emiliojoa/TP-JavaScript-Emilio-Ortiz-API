const animeUrl = fetch("https://api.thecatapi.com/v1/images/search?limit=10")


const promes= async()=> {
    try{
        const respuesta=await animeUrl;
        const data=await respuesta.json()
        displayCharacters(data);
        console.log(data)
    }catch(error){
    console.log("hubo un error")
    }
    
}

promes();

// const promes2= async()=> {
//     try{
//         const respuesta=await animeUrl;
//         const data=await respuesta.json()
        
//         return
//     }catch(error){
//     console.log("hubo un error")
//     }
// }

function displayCharacters(anime) {

    const container = document.getElementById("container");
    
    for(i in anime){
      const animeElement = document.createElement("div");
      animeElement.className = "anime";
      animeElement.innerHTML = `
            <img class="gatos" src="${anime[i].url}">
            <p class="id">ID: ${anime[i].id}"</p>
        `;
      container.appendChild(animeElement);
    };
}

