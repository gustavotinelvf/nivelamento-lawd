/* ==========================================
   DADOS.JS
   A lista de todas as fitas do site.
   Pra adicionar uma fita, copie um bloco { ... } e mude os valores.
   Não esqueça da vírgula entre os blocos!
   ========================================== */

/* Nome bonito de cada mood (a chave tem que ser igual ao "mood" das fitas e aos botões do HTML) */
var nomesMood = {
  madrugada: "Madrugada",
  sol: "Dia de sol",
  melancolia: "Melancolia",
  rock: "Rock'n'roll",
};

/* Campos de cada fita:
   artista   -> nome que aparece no rótulo do K7
   faixa     -> nome da música
   mood      -> madrugada | sol | melancolia | rock
   capa      -> nome do arquivo dentro de img/capas/<mood>/  (ex.: img/capas/sol/sol-01.jpg  ->  "sol-01.jpg")
                 minúsculo, sem espaço nem acento
   destaque  -> true se for aparecer na home em "Em destaque" (opcional)
   ajuste    -> (opcional) "contain" (padrão): mostra a arte inteira, com faixas escuras se a proporção não bater
                           "cover": preenche a capa inteira, cortando as bordas da imagem
   foco      -> (opcional) só vale com "cover": qual parte da imagem fica visível. Ex.: "50% 0%" = topo, "50% 100%" = base, "0% 50%" = esquerda */
var fitas = [
  /* ===== MADRUGADA (pasta img/capas/madrugada/) ===== */
  {
    artista: "Asal",
    faixa: "That's How It Goes",
    mood: "madrugada",
    capa: "asal.jpg",
    destaque: true,
  },
  {
    artista: "DJO",
    faixa: "End Of Beginning",
    mood: "madrugada",
    capa: "EndOfBeginning.jpg",
  },
  {
    artista: "Pink Floyd",
    faixa: "Time",
    mood: "madrugada",
    capa: "Time.jpg",
  },
  {
    artista: "Coldplay",
    faixa: "Yellow",
    mood: "madrugada",
    capa: "Coldplay yellow.jpg",
  },

  /* ===== DIA DE SOL (pasta img/capas/sol/) ===== */
  {
    artista: "Mamonas Assassinas",
    faixa: "Brasília Amarela",
    mood: "sol",
    capa: "mamonas.jpg",
    destaque: true,
  },
  {
    artista: "Rita Lee",
    faixa: "Mania de Você",
    mood: "sol",
    capa: "ManiaDeVoce.jpg",
  },
  {
    artista: "Jorge Ben Jor",
    faixa: "Chove Chuva",
    mood: "sol",
    capa: "cartola.jpg",
  },
  {
    artista: "Gal Costa",
    faixa: "Azul",
    mood: "sol",
    capa: "GalCosta.jpg",
  },

  /* ===== MELANCOLIA (pasta img/capas/melancolia/) ===== */
  {
    artista: "Harry Styles",
    faixa: "Sign of the Times",
    mood: "melancolia",
    capa: "SOTT.jpg",
    destaque: true,
  },
  {
    artista: "Lana Del Rey",
    faixa: "Gods & Monsters",
    mood: "melancolia",
    capa: "Lana.jpg",
  },
  {
    artista: "Jeff Buckley",
    faixa: "Lover, You Should've Come Over",
    mood: "melancolia",
    capa: "Lover.jpg",
  },
  {
    artista: "Frank Ocean",
    faixa: "Ivy",
    mood: "melancolia",
    capa: "blond.jpg",
  },

  /* ===== ROCK'N'ROLL (pasta img/capas/rock/) ===== */
  {
    artista: "Queen",
    faixa: "Bohemian Rhapsody",
    mood: "rock",
    capa: "Queen.jpg",
  },
  {
    artista: "Guns N' Roses",
    faixa: "Sweet Child O' Mine",
    mood: "rock",
    capa: "Guns.jpg",
  },
  {
    artista: "Queens of the Stone Age",
    faixa: "No One Knows",
    mood: "rock",
    capa: "QOTSA.jpg",
  },
  {
    artista: "David Bowie",
    faixa: "Starman",
    mood: "rock",
    capa: "Starman.jpg",
  },
];
