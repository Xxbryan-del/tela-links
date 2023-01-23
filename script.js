function togglemode(){

/* Forma reduziada */

    const html = document.documentElement
    html.classList.toggle("light")

 /* Forma reduziada */

 /* Forma extendida */

    /*if (html.classList.contains("light")){
        html.classList.remove("light")
    } else{
        html.classList.add("light")
    }*/

  /* Forma extendida */

/* Trocando imagem */

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")){
    //se tiver light mode, trocar a imagem
    img.setAttribute('src','icon-dark.png')
    } else{
    //se não tiver light mode, deixar a imagem padrão
    img.setAttribute('src','icon-light.png')
    }
}