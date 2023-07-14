function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "assets/avatar-light.png");
        img.setAttribute("alt", "Foto Mayk Brito sorrindo, usando óculos escuro e jaqueta");
    }
    else {
        img.setAttribute("src", "assets/avatar.png");
        img.setAttribute("alt", "Foto Mayk Brito sorrindo, usando óculos e camisa preta");
    }
}