function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // trocar a imagem baseado no tema
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto do Pedro com um terno preto e o celular na mão."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
