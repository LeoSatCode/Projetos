function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode. adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Professor Mayk sorrindo no modo light!")
  } else {
    // se não houver light mode, manter a primeira imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Professor Mayk sorrindo no modo noturno!")
  }
}
