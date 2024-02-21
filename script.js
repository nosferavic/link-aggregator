function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar avatar
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "perfil de Victor com moletom preto");
  } else {
    //se tiver sem light mode manter profile
    img.setAttribute("src", "./assets/profile.png");
  }
}
