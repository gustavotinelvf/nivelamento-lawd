/* --- Menu do celular: abre e fecha ao clicar em MENU --- */
var botaoMenu = document.querySelector(".menu-botao");
var menu = document.querySelector(".menu");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto"); // true se acabou de abrir
    botaoMenu.setAttribute("aria-expanded", aberto);
  });
}

/* --- Fitas: no toque, a capa abre e fecha o K7 --- */
var capas = document.querySelectorAll(".sl");

capas.forEach(function (capa) {
  capa.addEventListener("click", function () {
    capa.closest(".vhs").classList.toggle("aberta");
  });
});
