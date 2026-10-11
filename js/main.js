/* ==========================================
   MAIN.JS
   Interações do site.
   Precisa do dados.js carregado ANTES (veja a ordem dos <script> no HTML).
   ========================================== */

/* --- Menu do celular: abre e fecha ao clicar em MENU --- */
var botaoMenu = document.querySelector(".menu-botao");
var menu = document.querySelector(".menu");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto"); // true se acabou de abrir
    botaoMenu.setAttribute("aria-expanded", aberto);
  });
}

/* --- Fitas: no toque, a capa abre e fecha o K7 ---
   Como os cards são criados pelo JS depois da página carregar, escutamos o clique
   no documento inteiro e vemos se foi numa capa (isso se chama "delegação de evento"). */
document.addEventListener("click", function (evento) {
  var capa = evento.target.closest(".sl");
  if (!capa) return;

  /* Com mouse, quem abre e fecha a fita é o :hover do CSS. O clique só vale em tela de toque (sem hover),
     senão a fita ficaria presa aberta depois que o mouse saísse. */
  var semHover =
    window.matchMedia && window.matchMedia("(hover: none)").matches;
  if (semHover) {
    capa.closest(".vhs").classList.toggle("aberta");
  }
});

/* --- Monta o card de UMA fita (a mesma estrutura que o CSS espera) --- */
function criarCard(fita) {
  var card = document.createElement("article");
  card.className = "vhs";
  card.dataset.mood = fita.mood;

  /* K7 (fica atrás da capa) com o texto do rótulo */
  var k7 = document.createElement("div");
  k7.className = "tp";

  var k7Img = document.createElement("img");
  k7Img.className = "tp-img";
  k7Img.src = "img/fitas/vhs.svg";
  k7Img.alt = "";

  var rotulo = document.createElement("p");
  rotulo.className = "lb";

  var artista = document.createElement("b");
  artista.textContent = fita.artista; // textContent é seguro: nunca interpreta HTML

  var faixa = document.createElement("span");
  faixa.textContent = fita.faixa;

  rotulo.append(artista, faixa);
  k7.append(k7Img, rotulo);

  /* Capa (botão) com a arte da fita */
  var botao = document.createElement("button");
  botao.className = "sl";
  botao.type = "button";
  botao.setAttribute(
    "aria-label",
    "Abrir fita: " + fita.faixa + ", " + fita.artista,
  );

  /* Fundo da capa: a MESMA imagem, esticada e borrada (o CSS faz o borrão). Preenche as faixas
     quando a imagem não tem a proporção da capa, em vez de sobrar uma faixa lisa. */
  var caminhoCapa = "img/capas/" + fita.mood + "/" + fita.capa;
  var fundo = document.createElement("span");
  fundo.className = "sl-fundo";
  fundo.style.backgroundImage = 'url("' + caminhoCapa + '")';

  var capaImg = document.createElement("img");
  capaImg.className = "sl-capa";
  capaImg.src = caminhoCapa; // ex.: img/capas/sol/sol-01.jpg
  capaImg.alt = "Capa de " + fita.faixa;
  capaImg.loading = "lazy"; // só baixa a imagem quando ela está perto de aparecer

  /* Opcionais (vêm do dados.js): ajuste "cover" preenche a capa cortando as bordas; foco diz qual parte da imagem fica */
  if (fita.ajuste) capaImg.style.objectFit = fita.ajuste;
  if (fita.foco) capaImg.style.objectPosition = fita.foco;

  botao.append(fundo, capaImg);

  card.append(k7, botao);
  return card;
}

/* --- Esvazia o container e coloca os cards da lista --- */
function mostrarFitas(container, lista) {
  container.innerHTML = "";
  lista.forEach(function (fita) {
    container.appendChild(criarCard(fita));
  });
}

/* --- Tira acento e deixa minúsculo, pra busca "ana" achar "Aná" --- */
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/* --- HOME: só as fitas marcadas com destaque: true --- */
function iniciarHome() {
  var destaques = document.getElementById("fitas-destaque");
  if (!destaques) return; // não é a página da home

  mostrarFitas(
    destaques,
    fitas.filter(function (fita) {
      return fita.destaque;
    }),
  );
}

/* --- CATÁLOGO: todas as fitas, com filtro de mood e busca --- */
function iniciarCatalogo() {
  var lista = document.getElementById("lista-fitas");
  if (!lista) return; // não é a página do catálogo

  var busca = document.getElementById("busca");
  var botoesMood = document.querySelectorAll(".mo");
  var moodAtual = "todos";

  /* Mensagem pra quando nada bate com o filtro */
  var vazio = document.createElement("p");
  vazio.className = "vazio";
  vazio.textContent = "Nenhuma fita encontrada.";
  vazio.hidden = true;
  lista.after(vazio);

  function atualizar() {
    var texto = normalizar(busca ? busca.value : "");

    var filtradas = fitas.filter(function (fita) {
      var moodOk = moodAtual === "todos" || fita.mood === moodAtual;
      var buscaOk = normalizar(fita.artista + " " + fita.faixa).includes(texto);
      return moodOk && buscaOk;
    });

    /* Troca a paleta do site inteiro: o CSS (variaveis.css) reage ao data-mood da tag <html> */
    if (moodAtual === "todos") {
      document.documentElement.removeAttribute("data-mood");
    } else {
      document.documentElement.dataset.mood = moodAtual;
    }

    mostrarFitas(lista, filtradas);
    vazio.hidden = filtradas.length > 0;

    botoesMood.forEach(function (botao) {
      var ativo = botao.dataset.mood === moodAtual;
      botao.classList.toggle("ativo", ativo);
      botao.setAttribute("aria-pressed", ativo);
    });
  }

  botoesMood.forEach(function (botao) {
    botao.addEventListener("click", function () {
      moodAtual = botao.dataset.mood;
      atualizar();
    });
  });

  if (busca) {
    busca.addEventListener("input", atualizar);
  }

  /* Veio da home com #madrugada, #sol...? Já começa filtrado nesse mood */
  var hash = location.hash.replace("#", "");
  if (nomesMood[hash]) {
    moodAtual = hash;
  }

  atualizar();
}

iniciarHome();
iniciarCatalogo();
